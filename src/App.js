import React from "react";
import ReactDOM from "react-dom/client";
import {LOGO_URL} from "./config";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";

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
                    element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                }
            ]
        },
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)  