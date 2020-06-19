import React from "react";
import heartEmpty from "../../assets/images/heart.svg";
import heartFilled from "../../assets/images/heart-filled.svg";
import { connect } from "react-redux";
import { addToFavourites } from '../../store/actions/hotels-actions';
import "./LikeButton.scss";

export class LikeButton extends React.Component {
  handleClick = () => {
    const {hotel, addToFavourites} =this.props;

    addToFavourites(hotel);
  
  };

  isFav = (hotelId) => {
      return this.props.favourites.find((hotel) => {
          return hotel.id === hotelId;
      })
  }

  render() {
    const { hotel } = this.props;
    return (
      <div className="fav-button" onClick={this.handleClick}>
        <img className="fav-icon" src={this.isFav(hotel.id) ? heartFilled : heartEmpty} alt="" />
      </div>
    );
  }
}

const mapDispatchToProps =(dispatch) => {
    return {
        addToFavourites: (hotel) => dispatch(addToFavourites(hotel))
    }
}

const mapStateToProps =(state) => {
    return {
        favourites: state.favourites
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
