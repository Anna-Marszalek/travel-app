import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import HotelView from "./views/HotelView/HotelView";
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";
import AddHotelView from "./views/AddHotelView/AddHotelView";
import ContactUsView from "./views/ContactUsView/ContactUsView";
import UserHotelsView from "./views/UserHotelsView/UserHotelsView";
import TopBar from "./components/TopBar/TopBar";
import axios from "axios";
import { url } from "./utils/api";
import PrivateRoute from "./PrivateRoute";
import FavouriteView from "./views/FavouriteView/FavouriteView";

class App extends React.Component {
  state = {
    user: null,
    isAuthorized: false,
  };

  verifyUserStatus = () => {
    const token = localStorage.getItem("token");

    const options = {
      headers: {
        "x-access-token": token,
      },
    };

    if (token && token.length > 0) {
      axios
        .get(`${url}/users/me`, options)
        .then((response) => {
          this.setState({
            user: response.data,
            isAuthorized: true,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({
        user: null,
        isAuthorized: false,
      });
    }
  };

  componentDidMount() {
    this.verifyUserStatus();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <TopBar
            isAuthorized={this.state.isAuthorized}
            user={this.state.user}
            verifyUserStatus={this.verifyUserStatus}
          />
          <Switch>
            <Route path="/hotel/:id" component={HotelView} />
            <Route path="/contact-us" component={ContactUsView} />
            <Route path="/login" component={LoginView} />
            <Route path="/register" component={RegisterView} />
            <PrivateRoute
              path="/add-hotel"
              component={AddHotelView}
              isAuthorized={this.state.isAuthorized}
            />{" "}
            <PrivateRoute
              path="/my-hotels"
              component={UserHotelsView}
              isAuthorized={this.state.isAuthorized}
            />
            <Route path="/favourite" component={FavouriteView} />
            <Route path="/" component={HomeView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
