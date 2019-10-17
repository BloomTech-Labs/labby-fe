import React, {useState} from "react";
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const { red, blue, green } = require('@material-ui/core/colors');
// const Button = require('@material-ui/core/Button').default;

const useStyles = makeStyles({
  card: {
    width: '500px',
    height: '200px',
    margin: '150px auto',
    backgroundColor: 'gray'
  },
  bullet: {
    display: 'inline-block',
    margin: '30px auto',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Team = props => {
  const [state, setState] = useState(false)

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
     <Card className={classes.card}>
      <CardContent>
        <Typography variant="body2" component="p">
          Team info stuff
        </Typography>
      </CardContent>
    </Card> 
      <div style={{ position: 'relative', width: '100%', height: 500 }}>
    <Button onClick={() => setState({ open: true })}>View our Team!</Button>
    <AutoRotatingCarousel
      label='Get started'
      open={state.open}
      onClose={() => setState({ open: false })}
      onStart={() => setState({ open: false })}
      style={{ position: 'absolute' }}
    >
      <Slide
        media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: red[400] }}
        style={{ backgroundColor: red[600] }}
        title='This is a very cool feature'
        subtitle='Just using this will blow your mind.'
      />
      <Slide
        media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: blue[400] }}
        style={{ backgroundColor: blue[600] }}
        title='Ever wanted to be popular?'
        subtitle='Well just mix two colors and your are good to go!'
      />
      <Slide
        media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: green[400] }}
        style={{ backgroundColor: green[600] }}
        title='May the force be with you'
        subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
      />
    </AutoRotatingCarousel>
</div>
    </div>
  );
};

export default Team;
