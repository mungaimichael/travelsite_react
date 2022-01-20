import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="footer_register" id="register">
      <footer>
        <h1>socials</h1>
        <ul>
          <li>
            <Link>github</Link>
          </li>
          <li>
            <Link>gmail</Link>
          </li>
        </ul>
      </footer>
      <div className="register">
        <h1>fill out your details</h1>
        <form>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div className="email">
            <label htmlFor="email">email</label>
            <input type="text" name="email" />
          </div>
          <button
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
