import React from 'react';
import './App.scss';
import MainContainer from './components/MainContainer/MainContainer';
import Header from './components/Header/Header';
import data from './utils/data';
import Sidebar from './components/Sidebar/Sidebar';
import sidebar_data from './utils/sidebar_data';
class App extends React.Component {
  state = {
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
      hotels: data
    });
  }

  render() {
    return (
      <div className="App">
        <Header filterHotels={this.filterHotels} />
        <MainContainer data={this.state.hotels} />
        <Sidebar data={this.state.hotels}/>
      </div>
    );
  }
}

export default App;