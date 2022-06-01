import Axios from "axios";
import { useState } from "react";

export const MovieView = () => {
  const [movie, setMovie] = useState();
  const [serverResponse, setServerResponse] = useState();
  const [input, setInput] = useState("550"); // State för att lagra input

  const fetchData = async () => {
    try {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const API_URL = `https://api.themoviedb.org/3/movie/${input}?api_key=${API_KEY}`;
      const response = await Axios.get(API_URL);
      setServerResponse(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Movie View</h1>
      <input
        placeholder="Enter ID"
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={() => fetchData()}>Find movie</button>
      <h2>{serverResponse?.data?.title}</h2>
      <button onClick={() => fetchData()}>Fetch data</button>
    </div>
  );
};
