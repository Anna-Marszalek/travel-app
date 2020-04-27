import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import HotelView from "./views/HotelView/HotelView";
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";
import TopBar from "./components/TopBar/TopBar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <Router>
        <TopBar/>
          <Switch>
            <Route path="/hotel/:id" component={HotelView} />
            <Route path ="/login" component ={LoginView} />
            <Route path = "/register" component = {RegisterView} />
            <Route path="/" component={HomeView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
