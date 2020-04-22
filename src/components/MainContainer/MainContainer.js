import React from "react";
import "./MainContainer.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const MainContainer = (props) => {
  return (
    <div className="main-container">
      <label>
      {/* <div className="currency">
        <select onChange={props.convertPrice()} value={props.value}>
          <option value="CHF">CHF</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="PLN">PLN</option>
          <option defaultValue="USD">USD</option>
        </select>
      </div> */}
      </label>
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
          return (
            <div className="hotel" key={hotel.id}>
              <img src={hotel.image} alt={hotel.title} />
              <div className="hotel__info">
                <Link to={"hotel/" + hotel.id}>
                  <span className="hotel-name">{hotel.title}</span>
                </Link>
                <p>{hotel.location}</p>
                <span className="s-price">{hotel.price}$</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainContainer;
