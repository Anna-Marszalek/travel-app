import React from "react";
import "./MainContainer.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Hotel from "../Hotel/Hotel";

const MainContainer = (props) => {
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
          {props.data.length > 0 ? (
            props.data.map((hotel, index) => {
              return <Hotel data={hotel} key={index} />;
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
