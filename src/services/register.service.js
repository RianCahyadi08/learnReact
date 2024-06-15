import axios from "axios";

export const registerUser = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/users", data)
    .then((response) => {
      callback(true, response.data);
    })
    .catch((error) => {
      callback(false, error.response.data);
    });
};
