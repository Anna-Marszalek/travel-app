import React from "react";

class ContactUsView extends React.Component {
 

  render() {
    return (

      <div className="container">
        <h1>Contact Us</h1>
                <form onSubmit >
                    <label>Name:</label>
                    <input type = "text" name = "name" required></input>
                    <label>Email:</label>
                    <input type = "e-mail" name = "email" required></input>
                    <label>Message:</label>
                    <input type="textarea" name = "message" required></input>
                    <input type = "submit" value = "Register"></input>
                </form>
      </div>
    );
  }
}

export default ContactUsView;