import React from "react";
import "./Header.scss";

class Header extends React.Component {
  state = {};

  handleSearch = (event) => {
    this.props.filterHotels(event.target.value);
  };

  handleFilterPrice = (event) => {
    this.props.filterHotelsPrice(event.target.value);
  }

  render() {
    return (
      <div className="header">
        <span>
          <button style={{borderRadius:'100%',minHeight:'40px',minWidth:'40px'}}>
          <i className="glyphicon glyphicon-search"></i>
          </button>
          <input
            type="text"
            className="search-field"
            placeholder="Enter location"
            onChange={this.handleSearch}
          />
        <hr style={{width:'60%'}}></hr>
        </span>
      
      <div className="filters-field">
        <span>
          <span>
          <i className="glyphicon glyphicon-piggy-bank"></i>
          </span>
          <input type = "text" 
          placeholder = "Min. Price" 
          onChange = {this.handleFilterPrice}
          style={{border:'none',width:'100px',textAlign:'center', outline:'none'}}></input>
          <span>
          <i className="glyphicon glyphicon-usd"></i>
        </span>
          
         
        </span>
      </div>
      </div>
    );
  }
}

export default Header;
