import axios from 'axios';

export const getProducts = (callback) => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
        callback(response.data);
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
}