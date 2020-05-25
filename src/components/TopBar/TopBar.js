import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaComment } from "react-icons/fa";

class TopBar extends React.Component {
  handleClick = () => {
    this.props.history.push("/login");
  };

  handleLogoutClick = () => {
    localStorage.removeItem("token");
    this.props.verifyUserStatus();
  };

  render() {
    const { isAuthorized, user } = this.props;
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="navbar-brand" to="/">
                <h2>
                  <b>Travello</b>
                </h2>
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/favourite" className="favourite">
          Favourite
        </Link>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {!isAuthorized && (
                <div>
                  <Link className="navbar-brand" to="/register">
                    Register
                  </Link>
                  <input
                    type="button"
                    value="Sign In"
                    onClick={this.handleClick}
                  ></input>
                </div>
              )}

              {isAuthorized && (
                <div>
                  <Link className="navbar-brand" to="/add-hotel">
                    Add hotels
                  </Link>
                  <Link className="navbar-brand" to="/my-hotels">
                    My hotels
                  </Link>
                  <input
                    type="button"
                    value="Logout"
                    onClick={this.handleLogoutClick}
                  ></input>

                  <div className="user-profile">
                    <h2>Hello {user.username}</h2>
                  </div>
                </div>
              )}
            </li>
            <li
              className="navbar-brand"
              style={{ marginTop: "-3px", marginLeft: "10px" }}
            >
              <Link style={{ color: "black" }} to="/contact-us">
                <FaComment />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(TopBar);
