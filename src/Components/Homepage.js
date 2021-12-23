import Axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import SearchedMovie from "./SearchedMovie";

const Homepage = ({ setSearch, getData, Movies, API_KEY }) => {
  // state to store random trending movie
  const [TrendingMovie, setTrendingMovie] = useState({});
  // const [DisplayStatus, setDisplayStatus] = useState(false);

  // API URL

  let trendingMvUrl = "https://api.themoviedb.org/3/trending/movie/week?";

  // MOVIE IMAGE URL
  let posterUrl = "https://image.tmdb.org/t/p/w500/";

  // function to get random trending movie
  let getTrendingMv = async () => {
    let response = await Axios.get(`${trendingMvUrl}api_key=${API_KEY}`);
    let trendingMovieList = await response.data.results;
    await handleMovie(trendingMovieList);
  };
  let handleMovie = async (arr) => {
    let randomInd = [0, 1, 2, 3, 4, 5, 10, 6, 7, 8, 13];

    let randomNumber = Math.floor(Math.random() * randomInd.length);
    let trendingMovie = arr[randomNumber];
    movieHandler(trendingMovie);
  };

  // function to set the trending movie to component state

  let movieHandler = (trending) => {
    let movie = trending;
    setTrendingMovie(movie);
  };

  // run function to fetch trending movie once during loudup
  useEffect(
    () => {
      getTrendingMv();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div className="homepage">
      <Header
        setSearch={setSearch}
        getData={getData}
        Movies={Movies}
        // setDisplayStatus={setDisplayStatus}
        // DisplayStatus={DisplayStatus}
      />
      <div className="homepage_wrap">
        <div className="movie_poster_wrapper">
          <img src={`${posterUrl}${TrendingMovie.poster_path}`} alt="" />
        </div>
        <div className="trending_movie_description">
          <h1>{TrendingMovie.title}</h1>
          <p>{TrendingMovie.overview}</p>
          <h2 id="rating">{`${TrendingMovie.vote_average} RATING`}</h2>
        </div>
      </div>
      <SearchedMovie Movies={Movies} TrendingMovie={TrendingMovie} />
    </div>
  );
};

export default Homepage;
