import React, { useState } from "react";
import Axios from "axios";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Homepage from "./Components/Homepage";

const App = () => {
  // state to handle user search query
  const [Query, setQuery] = useState("");

  // state to handle movie response
  const [Movies, setMovies] = useState([]);

  // API variables

  let API_KEY = "5cc4e35007253470f56f68d826ae8f8d";
  let BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=`;

  // function to handle setting query from user input
  let setSearch = async (txt) => {
    let text = await txt;
    setQuery(text);
  };
  // function to handle the data fetching
  let getData = async (text) => {
    await setSearch(text);
    let response = await Axios.get(
      `${BASE_URL}${API_KEY}&query=${Query}&page=1`
    );
    let movieResponse = await response.data.results;
    await handleMovies(movieResponse);
  };

  let handleMovies = async (arr) => {
    let films = await arr;
    movieDisplay(films);
  };
  let movieDisplay = (films) => {
    let moviesArray = films;
    setMovies(moviesArray);
  };
  return (
    <Router>
      <>
        <Route path="/" exact>
          <Homepage
            setSearch={setSearch}
            getData={getData}
            Movies={Movies}
            API_KEY={API_KEY}
          />
        </Route>
        <Route path="/Contact" component={Contact} exact></Route>
      </>
    </Router>
  );
};

export default App;
