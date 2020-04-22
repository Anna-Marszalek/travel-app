import React from 'react';
import sidebarData from '../../utils/sidebar_data';
import './Sidebar.scss';
import AddHotel from '../AddHotel/AddHotel';


class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-block sidebar-hotels">
          <h2>More than just hotels</h2>
          <div className="s-list">
            {sidebarData.map((hotel, index) => {
              return (
                <div className="s-hotel" key = {index}>
                  <div
                    className="s-photo"
                    style={{ backgroundImage: `url(${hotel.image})` }}
                  ></div>
                  <div className="s-info">
                    <span className="s-title">{hotel.title}</span>
                    <span className="s-location">{hotel.location}</span>
                    <span className="s-price">{hotel.price}$</span>
                  </div>
                  <div className="s-button">
                    <div className="s-dot"></div>
                    <div className="s-dot"></div>
                  </div>
                </div>
              );
            })}
          </div>

        <AddHotel/>  
        </div>
      </div>
    );
  }
}

export default Sidebar;
