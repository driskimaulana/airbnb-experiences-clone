import React from "react";
import Katie from "../Assets/images/katie-zaferes.png"
import Stars from "../Assets/images/star.png"
import cardData from "../Data/cardData";

export default function Card(props)
{
    console.log(props)

    let badgeText;
    if(props.data.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(props.data.location === "Online"){
        badgeText = "ONLINE"
    }

    const badge = <div className="card--badge">{badgeText}</div>

    return (
        <div className="card">

            {!badgeText ? "" : badge}
            <img className="card--image" src={ require(`../Assets/images/${props.data.coverImg}`)} />
            <div className="card--rating">
                <img src={Stars} />
                <p className="card--rating-primary">{props.data.stats.rating}</p>
                <p className="card--rating-secondary">({props.data.stats.reviewCount}) · {props.data.location}</p>
            </div>
            <p>{props.data.title}</p>
            <p><span className="card--price">From ${props.data.price}</span> / person</p>
        </div>
    );
}