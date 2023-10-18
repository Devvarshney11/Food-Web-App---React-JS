import React from "react";
import ReactDOM from "react-dom/client";
import {LOGO_URL} from "./config";
import Header from "./components/Header";
import Body from "./components/Body";

// -Header
//     -Logo
//     -Navitems
//     -Cart
// -Body
//     -SearchBar
//     -Restaurant Card
// -Footer

const Footer = () => (
    <h1>Footer</h1>
)

const AppLayout = () => (
    <>
        <Header />
        <Body />
        <Footer />
    </>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)  