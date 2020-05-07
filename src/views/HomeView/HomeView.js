import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import Header from "../../components/Header/Header";
import axios from "axios";
import rates from "../../utils/rates";

class HomeView extends React.Component {
  state = {
    hotels: [],
    sort: true,
    dataFromApi: [],
    currency: "USD",
    currencyIcon: "$",
  };

  filterHotels = (name) => {
    const filteredHotels = this.state.hotels.filter((hotel) => {
      return hotel.location.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({
      hotels: name.length > 0 ? filteredHotels : this.state.dataFromApi,
    });
  };

  filterHotelsPrice = (price) => {
    const filteredHotels = this.state.dataFromApi.filter((hotel) => {
      return hotel.price >= parseInt(price);
    });

    this.setState({
      hotels: parseInt(price) > 0 ? filteredHotels : this.state.dataFromApi,
    });
  };

  sortHotels = () => {
    let aMoreB;
    let bMoreA;

    console.log("App -> sortHotels -> this.state.sort", this.state.sort);
    if (this.state.sort) {
      aMoreB = 1;
      bMoreA = -1;
    } else {
      aMoreB = -1;
      bMoreA = 1;
    }

    return this.state.dataFromApi.sort((a, b) => {
      if (a.title > b.title) {
        return aMoreB;
      } else if (b.title > a.title) {
        return bMoreA;
      } else {
        return 0;
      }
    });
  };

  switchSort = () => {
    this.setState({
      sort: !this.state.sort,
      hotels: this.sortHotels(),
    });
  };

  convertPrice = (e) => {
    this.setState({
      currency: e.target.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currency !== this.state.currency) {
      const dataCopy = JSON.parse(JSON.stringify(this.state.dataFromApi));

      const hotelsNew = dataCopy.map((hotel) => {
        hotel.price = Math.ceil(hotel.price * rates[this.state.currency]);
        return hotel;
      });

      this.setState({
        hotels: hotelsNew,
      });
    }
  }

  componentDidMount() {
    axios
      .get("https://nodejs-mysql-it-academy.herokuapp.com/hotels")
      .then((res) => {
        this.setState({
          dataFromApi: res.data,
        });
        this.switchSort();
      });
  }

  render() {
    return (
      <div>
        <Header
          filterHotels={this.filterHotels}
          filterHotelsPrice={this.filterHotelsPrice}
        />
        <MainContainer
          data={this.state.hotels}
          switchSort={this.switchSort}
          sort={this.state.sort}
          convertPrice={this.convertPrice}
          currency={this.state.currency}
          currencyIcon={this.setCurrencyIcon}
        />
      </div>
    );
  }
}

export default HomeView;
