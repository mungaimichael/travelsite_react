import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ setSearch, getData, DisplayStatus }) => {
  // state to handle user input
  const [Input, setInput] = useState("");

  let handleChange = (event) => {
    let input = event.target.value;
    setInput(input);
    setSearch(Input);
  };
  let handleDataFetch = (event, txt) => {
    event.preventDefault();
    getData(txt);
    setInput("");
    console.log(DisplayStatus);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h1>
            mungai<span>tv</span>
          </h1>
        </Link>
      </div>
      <div className="search_container">
        <form>
          <input
            type="text"
            value={Input}
            onChange={handleChange}
            placeholder="what's on your mind? "
          />
          <button
            onClick={(event) => {
              handleDataFetch(event, Input);
            }}
          >
            search
          </button>
          <Link className="contact" to="/Contact">
            <h6>contact me</h6>
          </Link>
        </form>
      </div>
    </header>
  );
};

export default Header;
