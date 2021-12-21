import React, { useState, useEffect } from "react";

const Hero = ({ Movies, TrendingMovie }) => {
  // state to handle hero section display
  const [DisplayHero, setDisplayHero] = useState(false);

  // function to handle display hero change
  let handleHeroChange = () => {
    if (Movies.length > 0) {
      setDisplayHero(true);
    } else {
      setDisplayHero(false);
    }
    console.log(TrendingMovie);
  };

  // function to handle seacrched movies container
  // true value changes container class name to show, false value changes container class name to hide

  // let closeSearchedMovies = () => {
  //   setDisplayHero(false);
  // };

  // slice Movie array to 5 items
  let firstFiveMovies = Movies.slice(0, 5);

  useEffect(() => {
    handleHeroChange();
  }, [firstFiveMovies]);
  return (
    <div className={DisplayHero ? "searched show" : "searched hide"}>
      <ul className="searchedMvList">
        {firstFiveMovies.map((mv) => (
          <li key={mv.id}>
            <h3>{mv.original_title}</h3>
            <div className="backdrop_path">{/* {mv.backdrop_path} */}</div>
          </li>
        ))}
      </ul>
      <div className="mostlySearchedMv">
        <h1>most searched movie</h1>
        {/* <img src={Movies[0].backdrop_path} alt="just an image" /> */}
      </div>
      {/* <button onClick={closeSearchedMovies}>X</button> */}
    </div>
  );
};

export default Hero;
