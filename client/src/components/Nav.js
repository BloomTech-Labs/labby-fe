import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core"

const Nav = props => {
  return (
    <header>
      <h1>Welcome to Labby!</h1>
      <nav>
        <Link to="/">
          <Button variant="contained" style={border: '5px solid pink'}>Home</Button>
        </Link>
        <Link to="/learn">
          <Button variant="contained">Learn</Button>
        </Link>
        <Link to="/team">
          <Button variant="contained">Team</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
