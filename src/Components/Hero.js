import React from "react";
import PhotoGrid from "../Assets/images/photo-grid.png";

export default function Hero()
{
    return(
        <div className="hero">
            <img src={PhotoGrid} className="hero--image"/>
            <h2 className="hero--title">Online Experiences</h2>
            <p className="hero--desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    );
}