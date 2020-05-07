import React from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom';

class LoginView extends React.Component {

    login = (event) => {
        event.preventDefault(); //mowi do form- nie rob nic- nie odswiezaj strony- CZEKAJ

        const form = new FormData(event.target); // dane zachowane w form

        for (let field of form){
            console.log(field)   //kazdy input jest tablica
        }

        const url ='https://nodejs-mysql-it-academy.herokuapp.com/';
        const options = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        axios.post(url + 'login' , form , options)
        .then(response =>{
            localStorage.setItem('token', response.data.accessToken)
            this.props.history.push('/');  // jezeli login success, token bedzie zapisany do localstorage
        }) 
        .catch(error =>{
            console.log(error)
        })
    }

    render() {
        return (
            <div className = "container">
                <h1>Login</h1>
                <form onSubmit ={this.login}> 
                    <label>Username:</label>
                    <input type = "text" name = "username" required></input>
                    <label>Password:</label>
                    <input type="password" name = "password" required></input>
                    <input type = "submit" value = "Login"></input>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginView);