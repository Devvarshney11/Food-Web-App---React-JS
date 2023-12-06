import React from "react";
import ReactDOM from "react-dom/client";
import Shrimmer from "./components/Shrimmer";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import {lazy,Suspense} from "react";
import { Provider } from "react-redux";
import store from "./utils/store";

const Cart = lazy(()=>import("./components/Cart"));
const About = lazy(()=>import("./components/About"));
const Contact = lazy(()=>import("./components/Contact"));
const RestaurantMenu = lazy(()=>import("./components/RestaurantMenu"));
const Mart = lazy(()=>import("./components/Mart"));

const Footer = () => (
    <h1>Footer</h1>
)

const AppLayout = () => (
    <Provider store = {store}>
        <Header />
        <Outlet />
        <Footer />
    </Provider>
)
const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayout/>,
            errorElement:<Error/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/about",
                    element:<Suspense fallback={<Shrimmer/>}><About/></Suspense>
                },
                {
                    path:"/contact",
                    element:<Suspense fallback={<Shrimmer/>}><Contact/></Suspense>
                },
                {
                    path:"/restaurants/:id",
                    element:<Suspense fallback={<Shrimmer/>}><RestaurantMenu/></Suspense>
                },
                {
                    path:"/mart",
                    element:<Suspense fallback={<Shrimmer/>}><Mart/></Suspense>
                },
                {
                    path:"/cart",
                    element:<Suspense fallback={<Shrimmer/>}><Cart/></Suspense>
                }
            ]
        },
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
