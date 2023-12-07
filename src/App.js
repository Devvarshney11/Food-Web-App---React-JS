import React from "react";
import ReactDOM from "react-dom/client";
import Shrimmer from "./components/Shrimmer";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import {lazy,Suspense} from "react";
import { Provider } from "react-redux";
import Login from "./components/Login";
import store from "./utils/store";
import { Navigate } from "react-router-dom";
import Footer from "./components/Footer";
const Cart = lazy(()=>import("./components/Cart"));
const About = lazy(()=>import("./components/About"));
const Contact = lazy(()=>import("./components/Contact"));
const RestaurantMenu = lazy(()=>import("./components/RestaurantMenu"));
const Mart = lazy(()=>import("./components/Mart"));

const isAuth = localStorage.getItem("isAuth");
console.log(isAuth);
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
                    element: isAuth === "Dev" ?<Body/>:<Navigate to="/login"/>
                },
                {
                    path:"/about",
                    element:isAuth === "Dev" ?<Suspense fallback={<Shrimmer/>}><About/></Suspense>:<Navigate to="/login"/>
                },
                {
                    path:"/contact",
                    element:isAuth === "Dev" ?<Suspense fallback={<Shrimmer/>}><Contact/></Suspense>:<Navigate to="/login"/>
                },
                {
                    path:"/restaurants/:id",
                    element:isAuth === "Dev" ?<Suspense fallback={<Shrimmer/>}><RestaurantMenu/></Suspense>:<Navigate to="/login"/>
                },
                {
                    path:"/mart",
                    element:isAuth === "Dev" ?<Suspense fallback={<Shrimmer/>}><Mart/></Suspense>:<Navigate to="/login"/>
                },
                {
                    path:"/cart",
                    element:isAuth === "Dev" ?<Suspense fallback={<Shrimmer/>}><Cart/></Suspense>:<Navigate to="/login"/>
                },
                {
                    path:"/login",
                    element:isAuth === "Dev"?<Navigate to="/"/>:<Login/>
                }
            ]
        },
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
