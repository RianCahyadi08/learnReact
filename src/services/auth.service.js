import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);

  return decoded.user;
};

export const getUserId = (token) => {
  const decoded = jwtDecode(token);

  return decoded.sub;
};

export const profileId = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/users/${id}`)
    .then((response) => {
      // console.log(response.data);
      callback(response.data);  
    })
    .catch((error) => {
      callback(error);
    });
};
