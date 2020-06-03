import React from "react";
import "./Sidebar.scss";
import { connect } from "react-redux";



class Sidebar extends React.Component {
  // state = {
  //   dataFromApi: [],
  // };

  // componentDidMount() {
  //   const API =
  //     "https://nodejs-mysql-it-academy.herokuapp.com/hotels/recommended";
  //   axios.get(API).then((res) => {
  //     this.setState({
  //       dataFromApi: res.data,
  //     });
  //   });
  // }

  render() {
    const { hotels } = this.props
    return (
      <div className="sidebar">
        <div className="sidebar-block sidebar-hotels">
          <h2>More than just hotels</h2>
          <div className="s-list">
            {hotels.map((hotel, index) => {
              const { title, image, price, location } = hotel;
              if(hotel.recommended){
              return (
                <div className="s-hotel" key={index}>
                  <div
                    className="s-photo"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                  <div className="s-info">
                    <span className="s-title">{title}</span>
                    <span className="s-location">{location}</span>
                    <span className="s-price">{price}$</span>
                  </div>
                  <div className="s-button">
                    <div className="s-dot"></div>
                    <div className="s-dot"></div>
                  </div>
                </div>
              );
            }
            else {
              return []
            }
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps =(state) => {
  return {
      hotels: state.hotels
  }
}

export default connect(mapStateToProps)(Sidebar);
