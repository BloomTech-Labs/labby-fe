import React from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

// import Movie from "../images/zoom.mp4";


//small change

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  div: {
    height: '1000px',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  paragraph: {
    color: 'white',
    background: '#222E44',
    width: '500px'
  },
  card: {
    maxWidth: 900,
    maxheight: 900
  },
});
const Learn = props => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Paper className={classes.paragraph}>
        <Typography variant="h5" component="h3">
        Project designed to automate the process of manaually assiging incoming
        Labda students to their Labs teams, saving Lambda over 100 staff hours!
        </Typography>
      </Paper>

      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="iframe"
          alt="Labby Demo"
          height="315"
          width="550"
          // src={Movie}
          title="Contemplative Reptile"
          // autoplay={false}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Click Play
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Labby is a great yada yada important kind of thing that is cool and awesome and a whole bunch of other things. We love Labby, everyone loves Labby even though Labby is a little annoying sometimes. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Meet the Team
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default Learn;