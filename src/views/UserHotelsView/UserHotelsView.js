import React from "react";
import axios from "axios";
import Hotel from "../../components/Hotel/Hotel";
import { withRouter } from "react-router-dom";
import { url } from "../../utils/api";

class UserHotelsView extends React.Component {
  state = {
    hotels: [],
  };

  componentDidMount() {
    const options = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    };

    axios.get(`${url}/my-hotels`, options).then((res) => {
      this.setState({
        hotels: res.data,
      });
    });
  }

  render() {
    return (
      <div className="hotels-container">
        <div className="hotels">
          {this.state.hotels.length ? (
            this.state.hotels.map((hotel) => <Hotel data={hotel} />)
          ) : (
            <div></div>
          )}
          ;
        </div>
      </div>
    );
  }
}

export default withRouter(UserHotelsView);
