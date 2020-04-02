import React from "react";
import "./App.scss";
import MainContainer from "./components/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import data from "./utils/data";
import Sidebar from "./components/Sidebar/Sidebar";
import sidebar_data from "./utils/sidebar_data";
class App extends React.Component {
  state = {
    sidebar_hotels: [],
    hotels: []
  };

  filterHotels = name => {
    const filteredHotels = this.state.hotels.filter(hotel => {
      return hotel.location.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({
      hotels: name.length > 0 ? filteredHotels : data
    });
  };

  componentDidMount() {
    this.setState({
      hotels: data,
      sidebar_hotels: sidebar_data
    });
  }

  render() {
    return (
      <div className="App">
        <Header filterHotels={this.filterHotels} />
        <MainContainer data={this.state.hotels} />
        <Sidebar sidebar_data={this.state.sidebar_hotels} />
      </div>
    );
  }
}

export default App;
