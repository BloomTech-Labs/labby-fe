import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <header>
      <h1>Welcome to Labby!</h1>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/learn">
          <button>Learn</button>
        </Link>
        <Link to="/team">
          <button>Team</button>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
