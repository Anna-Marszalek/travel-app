import React from "react";
import "./Sidebar.scss";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebar_hotels: [],
      asc: true
    };
  }

  render() {
    return (
      <div className="sidebar">
        <h1>More than just hotels</h1>
        {this.props.sidebar_data.map(element => {
          return (
            <div className="card">
              <div className="sidebar-left">
                <img src={element.image} className="card-img-top" />
              </div>
              <div className="sidebar-middle">
                <h5 className="card-title">{element.title}</h5>
                <p className="sidebar-hotel-location" className="card-text">
                  {element.location}
                </p>
                <span className="label label-info">{element.price + "$"}</span>
              </div>
              <div className="sidebar-right">
                <button type="button" className="btn btn-light">
                  <svg
                    class="bi bi-three-dots"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
