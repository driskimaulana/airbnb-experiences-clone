import React from "react";
import Logo from "../Assets/images/airbnb-logo.png";

export default function Navbar()
{
    return (
        <nav className="navbar">
            <img src={Logo} className="navbar--logo"/>
        </nav>
    );
}