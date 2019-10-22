import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import Carousel from './Carousel'

const useStyles = makeStyles({
  card: {
    width: '500px',
//     height: '300px',
    margin: '5px auto 50px',
    backgroundColor: '#222E44',
    wordWrap: 'break-word',
    color: 'white',
  },
  bullet: {
    display: 'inline-block',
    margin: '30px auto',
    transform: 'scale(0.8)',
    border: '3px solid red'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    width: '247px',
    background: '#33B2DD',
    color: 'black',
    margin: '100px'
  }
});

const Team = props => {
  const classes = useStyles();

  return (
    <div>
     <Card className={classes.card}>
      <CardContent>
        <Typography variant="body2" className={classes.paragraph}>
          Our team is really cool. I do not know why some text works and some does not work. Is it the apostrophe? Or isn't it?
        </Typography>
        </CardContent>     
    </Card> 

    <Carousel />

    </div>
  );
};

export default Team;

