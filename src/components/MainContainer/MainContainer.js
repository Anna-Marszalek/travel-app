import React from 'react';
import './MainContainer.scss';
import Sidebar from '../Sidebar/Sidebar';

const MainContainer = (props) => {
  
    return (
      <div className="main-container">
        <Sidebar />
        <div className="hotels">
          <div className="tools" style={{width: '100%'}}>
            <input type="button" value={props.sort ? 'A-Z' : 'Z-A'} onClick={props.switchSort} />
          </div>
          {props.data.map(hotel => {
            return (
              <div className="hotel">
                <img src={hotel.image} alt={hotel.title} />
                <div className="hotel__info">
                  <span className="hotel-name">{hotel.title}</span>
                  <p>{hotel.location}</p>
                  <span className="s-price">{hotel.price}$</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default MainContainer;
