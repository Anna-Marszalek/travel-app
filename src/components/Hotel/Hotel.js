import React from "react";
import "./Hotel.scss";
import { Link } from "react-router-dom";
import LikeButton from '../LikeButton/LikeButton';
import PropTypes from 'prop-types';

const Hotel = ({data, removable }) => {
  return (
    <div className="hotel" key={data.id}>
      <img src={data.image} alt={data.title} className="hotel-img"/>
      <div className="hotel_info">
        <Link to={"hotel/" + data.id}>
          <span className="hotel-name">{data.title}</span>
        </Link>
      </div>
      <span className="hotel-price">{data.price}</span>
      <p>{data.location}</p>
      <LikeButton hotel={data} />
    </div>
  );
};

Hotel.propTypes = {
  data: PropTypes.object,
  removable: PropTypes.bool,
}

export default Hotel;
