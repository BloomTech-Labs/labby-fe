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
    backgroundColor: 'white'
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
          We are the Labby team!!
        </Typography>
      </CardContent>
    </Card> 
      <div style={{ position: 'relative', width: '100%', height: 400 }}>
    <Button onClick={() => setState({ open: true })}>View our Team!</Button>
    <AutoRotatingCarousel
      label='Github'
      open={state.open}
      onClose={() => setState({ open: false })}
      onStart={() => setState({ open: false })}
      style={{ position: 'absolute' }}
      autoplay= {false}
    >
      <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UEM5YBTNJ-6971e8bf03da-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: 'black' }}
        title='Tyler Foreman'
        subtitle='Info about person'
      />
      <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UFCQZEKFB-5c387ada94ad-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: 'black' }}
        title='York Cook'
        subtitle='Info about person'
      />
      <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UGWDTGE2D-304822da85af-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: 'black' }}
        title='Laura Daugherty'
        subtitle='Info about person'
      />
      <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UGFT04U6Q-897737d11303-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: 'black' }}
        title='Nate Magera'
        subtitle='Info about person'
      />
      <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UGCGRFT2P-f2ff4fe456b5-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: 'black' }}
        title='Doc Jones'
        subtitle='Info about person'
      />
      <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UGGFY1C5A-0e7e5f400150-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: 'black' }}
        title='Edwin Parker'
        subtitle='Info about person'
      />
      <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UGGEENM52-2c89c17c2331-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: 'black' }}
        title='Efrain Vazquez'
        subtitle='Info about person'
      />
      <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UHNLF57NG-0e318399719b-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: 'black' }}
        title='Zach Imbriaco'
        subtitle='Info about person'
      />
    </AutoRotatingCarousel>
</div>
    </div>
  );
};

export default Team;
