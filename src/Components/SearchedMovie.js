import React, { useState, useEffect } from "react";

const Hero = ({ Movies }) => {
  // state to handle hero section display
  const [DisplayHero, setDisplayHero] = useState(false);
  let posterUrl = "https://image.tmdb.org/t/p/w45/";

  // function to handle display hero change
  let handleHeroChange = () => {
    if (Movies.length > 0) {
      setDisplayHero(true);
    } else {
      setDisplayHero(false);
    }
  };

  // function to handle seacrched movies container
  // true value changes container class name to show, false value changes container class name to hide

  let closeSearchedMovies = () => {
    setDisplayHero(false);
    console.log(DisplayHero);
  };

  // slice Movie array to 5 items
  let firstFiveMovies = Movies.slice(0, 5);

  // eslint-disable-next-line

  useEffect(
    () => {
      handleHeroChange();
    },
    // eslint-disable-next-line
    [firstFiveMovies]
  );

  return (
    <div className={DisplayHero ? "searched show" : "searched "}>
      <ul className="searchedMvList">
        {firstFiveMovies.map((mv) => (
          <li key={mv.id}>
            <img
              src={`${posterUrl}${mv.poster_path}`}
              alt=""
              id="backdrop_image"
            />
            <h3>{mv.title}</h3>
          </li>
        ))}
      </ul>

      {/* button to close searched container */}
      <button onClick={() => closeSearchedMovies(DisplayHero)}>X</button>
    </div>
  );
};

export default Hero;
