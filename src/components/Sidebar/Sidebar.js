import React from "react";
import "./Sidebar.scss";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      hotels: [],
      asc: true
    };
  }

  render() {
    return (
      <div className="sidebar">
        {/* <h1>More than just hotels</h1> */}
   
        {this.props.data.map(element => {
          return (
            <div className="sidebar_block">
              <img src={element.image} />
              <div className="sidebar_hotel">
                <span className="sidebar_hotel_title">{element.title}</span>
                <p className = "sidebar_hotel_location">{element.location}</p>
                <p className = "sidebar_hotel_price">{element.price}</p>
              </div>
            </div>
          );
        })}
        
      </div>
    );
  }
}

export default Sidebar;
