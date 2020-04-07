import React from 'react';
import './App.scss';
import MainContainer from './components/MainContainer/MainContainer';
import Header from './components/Header/Header';
import data from './utils/data';

class App extends React.Component {
  state = {
    hotels: [],
    sort: true
  };

  filterHotels = name => {
    const filteredHotels = this.state.hotels.filter(hotel => {
      return hotel.location.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({
      hotels: name.length > 0 ? filteredHotels : data
    });
  };

  filterHotelsPrice = price => {
    const filteredHotels = data.state.hotels.filter(hotel =>{
      return hotel.price >= parseInt(price);
    });

    this.setState({
      hotels: parseInt(price) > 0 ? filteredHotels : data
    });
  };

  sortHotels = () => {
    let aMoreB;
    let bMoreA;

    console.log('App -> sortHotels -> this.state.sort', this.state.sort)
    if (this.state.sort) {
      aMoreB = 1;
      bMoreA = -1;
    } else {
      aMoreB = -1;
      bMoreA = 1;
    }

    return data.sort((a, b) => {
      if (a.title > b.title) {
        return aMoreB;
      } else if (b.title > a.title) {
        return bMoreA;
      } else {
        return 0;
      }
    })
  }

  switchSort = () => {
    this.setState({
      sort: !this.state.sort,
      hotels: this.sortHotels()
    })
  }

  componentDidMount() {
    this.switchSort();
  }

  render() {
    return (
      <div className="App">
        <Header filterHotels={this.filterHotels} filterHotelsPrice={this.filterHotelsPrice}/>
        <MainContainer data={this.state.hotels} switchSort={this.switchSort} sort={this.state.sort} />
      </div>
    );
  }
}

export default App;
