import axios from "axios";

const api = axios.create({
  baseUrl: "https://ganheinaloteria.herokuapp.com/api/megasena"
});

export default api;
