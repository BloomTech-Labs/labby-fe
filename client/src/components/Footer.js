import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  
  footer: {
    width: '100%',
    background: '#222E44',
    color: 'white',
  },
});

const Nav = props => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div>Labby 2019</div>
    </footer>
  );
};

export default Nav;
