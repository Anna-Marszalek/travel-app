export const url = 'https://nodejs-mysql-it-academy.herokuapp.com';

export const options = {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  };