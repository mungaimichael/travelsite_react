import React from "react";

const RegisterCard = () => {
  return (
    <div className="packages" id="packages">
      <ul>
        <li>
          <h1>silver</h1>
          <p>
            5 trips annualy <br />
            3 star hotel for
            <br /> 3 nights and 2 days <br />
          </p>
          <button>join today </button>
        </li>
        <li id="diamond">
          <h1>diamond</h1>
          <p>
            10 trips annualy <br />
            5 star hotel for
            <br /> 5 nights and 4 days <br />
          </p>
          <button>join today </button>
        </li>
        <li>
          <h1>gold</h1>
          <p>
            7 trips annualy <br />
            4 star hotel for <br /> 4 nights and 3 days <br />
          </p>
          <button>join today </button>
        </li>
      </ul>
    </div>
  );
};

export default RegisterCard;
