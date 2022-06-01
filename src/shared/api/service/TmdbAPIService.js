import http from "../TmdbAPI";

const getFighClub = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return http.get(`movie/550?api_key=${API_KEY}`);
};

const findMoviesByTitle = (title) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  return http.get(`search/movie?api_key=${API_KEY}&query=${title}`);
};

export default { getFighClub, findMoviesByTitle };
