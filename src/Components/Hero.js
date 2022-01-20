import React from "react";
import hero from "../hero.jpg";
const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_img">
        <img src={hero} alt="hero" />
      </div>
      <div className="hero_description">
        <h1>we go to places they cannot see</h1>
        <p>
          travel with us to view the true beauty of the world.From <br />
          the wildlife in the African Savannah to the high hills <br />
          of the Himallayas
        </p>
        <button>book a trip</button>
      </div>
    </div>
  );
};

export default Hero;
