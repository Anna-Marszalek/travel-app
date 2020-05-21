import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import { getHotels } from '../../store/actions/hotels-actions';

class HomeView extends React.Component {
  state = {
    hotels: [],
    sort: true,
    dataFromApi: [],
  };

  filterHotels = (name) => {
    const filteredHotels = this.state.hotels.filter((hotel) => {
      return hotel.location.toLowerCase().includes(name.toLowerCase());
    });

    this.setState({
      hotels: name.length > 0 ? filteredHotels : this.props.hotels,
    });
  };

  sortHotels = () => {
    let aMoreB;
    let bMoreA;

    if (this.state.sort) {
      aMoreB = 1;
      bMoreA = -1;
    } else {
      aMoreB = -1;
      bMoreA = 1;
    }

    
    return this.props.hotels.sort((a, b) => {
      if (a.title > b.title) {
        return aMoreB;
      } else if (b.title > a.title) {
        return bMoreA;
      } else {
        return 0;
      }
    });
  };

  filterHotelsPrice = (price) => {
    const filteredHotels = this.props.hotels.filter((hotel) => {
      return hotel.price >= parseInt(price);
    });

    this.setState({
      hotels: price.length > 0 ? filteredHotels : this.props.hotels,
    });
  };

  switchSort = () => {
    this.setState({
      sort: !this.state.sort,
      hotels: this.sortHotels(),
    });
  };

  componentDidMount() {
    if (!this.props.hotels.length) {
      this.props.getHotels()
    }
  }

  render() {
    return (
      <div>
        <Header
          filterHotels={this.filterHotels}
          filterHotelsPrice={this.filterHotelsPrice}
        />
        <MainContainer
          data={this.props.hotels}
          switchSort={this.switchSort}
          sort={this.state.sort}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotels: state.hotels
})

const mapDispatchToProps = (dispatch) => ({
  getHotels: () => dispatch(getHotels())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);