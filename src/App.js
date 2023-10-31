import React from "react";
import ReactDOM from "react-dom/client";
import Shrimmer from "./components/Shrimmer";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import {lazy,Suspense} from "react";


const About = lazy(()=>import("./components/About"));
const Contact = lazy(()=>import("./components/Contact"));
const RestaurantMenu = lazy(()=>import("./components/RestaurantMenu"));

const Footer = () => (
    <h1>Footer</h1>
)

const AppLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
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
                }
            ]
        },
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
