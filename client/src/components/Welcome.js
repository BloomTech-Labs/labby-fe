import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Logo from "../images/labby.png";

const useStyles = makeStyles({
  button: {
    width: '247px',
    background: '#222E44',
    color: 'white',
    margin: '50px'
  },
  image: {
    width: '400px',
    height: '400px',
  }
});

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className={classes.display}>
      <div>
        <img src={Logo} alt="labby logo" className={classes.image}/>
      </div>
      <Link to="/learn">
        <Button variant="contained" className={classes.button}>LEARN MORE</Button>
      </Link>
    </div>
  );
};

export default Welcome;

