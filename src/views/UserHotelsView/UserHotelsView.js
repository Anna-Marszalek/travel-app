import React, { useEffect } from "react";
import Hotel from "../../components/Hotel/Hotel";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getUserHotels } from '../../store/actions/hotels-actions';

const UserHotelsView = () => {
  // componentDidMount() {
  //   // const options = {
  //   //   headers: {
  //   //     "x-access-token": localStorage.getItem("token"),
  //   //   },
  //   // };

  //   // axios.get(`${url}/my-hotels`, options).then((res) => {
  //   //   this.setState({
  //   //     hotels: res.data,
  //   //   });
  //   // }); -- > ZASTĄPIONE w hotel actions, komponent z klasowego zamieniony na funkcyjny
  // }

  const hotels = useSelector((state) => state.userHotels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserHotels());
  }, [] );
  

  return (
    <div className="hotels-container">
      <div className="hotels">
        {hotels.length ? (
          this.state.hotels.map((hotel) => <Hotel data={hotel} />)
        ) : (
          <div></div>
        )}
        
      </div>
    </div>
  );
};

export default withRouter(UserHotelsView);
