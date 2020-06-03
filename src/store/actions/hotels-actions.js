import axios from "axios";
import { url, options } from '../../utils/api';

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
      .get(`${url}/hotels`)
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

export const getUserHotels = () => {
  return (dispatch) => {
    dispatch({ type: 'GET_USER_HOTELS'});

    axios.get(`${url}/my-hotels`, options)
    .then((res) => {
      dispatch({
        type: 'GET_USER_HOTEL_SUCCESS',
        payload: res.data,
      });
    }).catch(() => {
      dispatch({
        type: 'GET_USER_HOTEL_ERROR',
      });
    });
  };
};
