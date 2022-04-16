import React from "react";
import Katie from "../Assets/images/katie-zaferes.png"
import Stars from "../Assets/images/star.png"

export default function Card()
{
    return (
        <div className="card">
            
            <img className="card--image" src={Katie} />
            {/* <div className="card--status">
                <p>SOLD</p>
            </div> */}
            <div className="card--rating">
                <img src={Stars} />
                <p className="card--rating-primary">5.0</p>
                <p className="card--rating-secondary">(6) · USA</p>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="card--price">From $136</span> / person</p>
        </div>
    );
}