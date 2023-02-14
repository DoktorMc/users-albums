import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";
// const API_URL = "https://63dba03bb8e69785e486c5c1.mockapi.io/users/";

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})