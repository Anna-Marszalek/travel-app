import React from "react";
import "./Header.scss";
import { connect } from 'react-redux';
import { saveText } from '../../store/actions/hotels-actions';


class Header extends React.Component {
  state = {};
  inputRef = React.createRef();

  handleSearch = (event) => {
    this.props.filterHotels(event.target.value);
  };

  handleFilterPrice = (event) => {
    this.props.filterHotelsPrice(event.target.value);
  }

  handleClick = () => {
    this.props.dispatch(saveText('New text is here'));
  }

  componentDidMount() {
    this.inputRef.current.focus();
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
            ref={this.inputRef}
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

      <input type= "button" value ="click" onClick={this.handleClick}>
        {this.props.savedText}
      </input>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    savedText: state.text,
  };
};

export default connect(mapStateToProps)(Header);
