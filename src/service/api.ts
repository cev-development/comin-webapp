import axios from "axios";

const api = axios.create({
  baseURL: "https://comin-bff.herokuapp.com",
});

export default api;
