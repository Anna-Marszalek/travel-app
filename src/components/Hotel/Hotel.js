import React from "react";
import "./Hotel.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import LikeButton from '../LikeButton/LikeButton';

const Hotel = (props) => {
  return (
    <div>
      <div className="currency">
        <select onChange={props.convertPrice} value={props.currency}>
          <option value={"CHF"}>CHF</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="PLN">PLN</option>
          <option defaultValue="USD">USD</option>
        </select>
      </div>
      <div className="main-container">
        <Sidebar />
        <div className="hotels">
          <div className="tools" style={{ width: "100%" }}>
            <input
              type="button"
              value={props.sort ? "A-Z" : "Z-A"}
              onClick={props.switchSort}
            />
          </div>

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
      </div>
    </div>
  );
};

export default Hotel;
