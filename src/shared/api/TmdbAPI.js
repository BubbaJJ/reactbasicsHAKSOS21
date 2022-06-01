import axios from "axios";

const TmdbAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default TmdbAPI;
