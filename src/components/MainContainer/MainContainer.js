import React from "react";
import "./MainContainer.scss";

class MainContainer extends React.Component {
  constructor() {
    super();
    // this.sortHotels = this.sortHotels.bind(this);
    // this.switchSort = this.switchSort.bind(this);
    this.state = {
      hotels: [],
      asc: true
    };
  }

  // sortHotels() {
  //   let aMoreB;
  //   let bMoreA;

  //   if (this.state.asc) {
  //     aMoreB = 1;
  //     bMoreA = -1;
  //   } else {
  //     aMoreB = -1;
  //     bMoreA = 1;
  //   }

  //   return this.props.data.sort((a, b) => {
  //     if (a.title > b.title) {
  //       return aMoreB;
  //     } else if (b.title > a.title) {
  //       return bMoreA;
  //     } else {
  //       return 0;
  //     }
  //   });
  // }

  // switchSort() {
  //   this.setState({
  //     asc: !this.state.asc,
  //     hotels: this.sortHotels()
  //   });
  // }

  componentDidMount() {
    // console.log('x', this.props.data);
    // this.switchSort();
  }

  componentDidUpdate(prevProps, prevState) {
    // this.switchSort();
  }

  render() {
    return (
      <div className="main-container">
        {/* <input type="button" value="change sorting" onClick={this.switchSort} /> */}
        {this.props.data.map(element => {
          return (
            <div className="hotel">
              <img src={element.image} />
              <div className="hotel__info">
                <span className="hotel-name">{element.title}</span>
                <p>{element.location}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MainContainer;
