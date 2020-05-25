import axios from "axios";

export const saveText = (text) => {
  return {
    type: "SAVE_TEXT",
    payload: text,
  };
};

export const saveHotels = (hotels) => {
  return {
    type: "SAVE_HOTELS",
    payload: hotels,
  };
};

export const getHotels = () => {
  return (dispatch) => {
    dispatch({ type: "GET_HOTELS" });

    axios
      .get("https://nodejs-mysql-it-academy.herokuapp.com/hotels")
      .then((res) => {
        dispatch({
          type: "GET_HOTELS_SUCCESS",
          payload: res.data,
        });
      })
      .catch(() => {
        dispatch({
          type: "GET_HOTELS_ERROR",
        });
      });
  };
};

export const addToFavourites = (hotel) => {
  return {
    type: "ADD_TO_FAVOURITES",
    payload: hotel,
  };
};

export const removeFromFavourites = (hotelId) => {
  return {
    type: "REMOVE_FROM_FAVOURITES",
    payload: hotelId,
  };
};
