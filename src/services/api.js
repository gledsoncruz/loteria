import axios from "axios";

const api = axios.create({
  baseURL: "https://ganheinaloteria.herokuapp.com/api/megasena/"
});

export default api;
