import axios from "axios";
import { jwtDecode } from "jwt-decode";

// export const getProducts = () => {
//   axios.get("https://fakestoreapi.com/products")
//   .then ((response) => {console.log(response)})
//   .catch ((error) => {console.log(error)})
// }
export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  // console.log(decoded)
  return decoded.user
}