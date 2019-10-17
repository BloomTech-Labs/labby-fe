import React from "react";

import Logo from "../images/labby.png";

const Welcome = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Labby!</h1>
      </header>
      <div>
        <img src={Logo} alt="labby baby" />
      </div>
      <div>
        <button> LEARN MORE</button>
      </div>
    </div>
  );
};

export default Welcome;
