import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class TopBar extends React.Component {

    handleClick = () => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <nav>
                <Link to ="/">Home</Link>
                <Link to = "/register">Register</Link>
                <input type = "button" value="Login" onClick ={this.handleClick}></input>
            </nav>
        )
    }
}

export default withRouter(TopBar)