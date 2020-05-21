import React from "react";
import "./Hotel.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";

const Hotel = (props) => {
  return (
    <div className="main-container">
      {props.data.map((hotel) => {
        const currencySign = JSON.parse(JSON.stringify(props.currency));
        return (
          <div className="hotel" key={hotel.id}>
            <img src={hotel.image} alt={hotel.title} />
            <div className="hotel__info">
              <Link to={"hotel/" + hotel.id}>
                <span className="hotel-name">{hotel.title}</span>
              </Link>
              <p>{hotel.location}</p>
              <span className="s-price">
                {hotel.price} {currencySign}
                {/* <LikeButton hotel={{}}/> */}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hotel;
