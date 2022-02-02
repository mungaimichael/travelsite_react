import React from "react";
const Header = () => {
  return (
    <div className="header">
      <header className="sticky">
        <span className="logo">
          <a href="#home"> mungai trvl</a>
        </span>
        <ul className="navlist">
          <li>
            <a href="#sectionTwo">about</a>
          </li>
          <li>
            <a href="#packages">packages</a>
          </li>
          <li className="register">
            <a href="#register">
              <button>register</button>
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
