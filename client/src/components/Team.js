import React, {useState} from "react";
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const { red, blue, green } = require('@material-ui/core/colors');
// const Button = require('@material-ui/core/Button').default;

const useStyles = makeStyles({
  card: {
    width: '500px',
//     height: '300px',
    margin: '75px auto',
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
//   paragraph: {
//       width: '100px',
//   },
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
  const [state, setState] = useState(false)

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
     <Card className={classes.card}>
      <CardContent>
        <Typography variant="body2" className={classes.paragraph}>
            Our team consists of seven amazing Lambda School students and one Team Lead. The team worked effectively together to learn about and understand how to work with AWS. AWS services were new to our team and we had to adopt a flexible work style to adjust to all the information we learned. 

        </Typography>
</CardContent>
    <div style={{ position: 'relative' }}>
  <Button className={classes.button} onClick={() => setState({ open: true })}>Click to View The Team</Button>
  <AutoRotatingCarousel
      label='Github'
      open={state.open}
      onClose={() => setState({ open: false })}
      onStart={() => setState({ open: false })}
      style={{ position: 'absolute' }}
      autoplay= {false}
    >
    <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UEM5YBTNJ-6971e8bf03da-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#222E44' }}
        title='Tyler Foreman'
        subtitle='Info about person'
      />
    <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UFCQZEKFB-5c387ada94ad-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#222E44' }}
        title='York Cook'
        subtitle='Info about person'
      />
    <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UGWDTGE2D-304822da85af-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#222E44' }}
        title='Laura Daugherty'
        subtitle='Info about person'
      />
    <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UGFT04U6Q-897737d11303-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#222E44' }}
        title='Nate Magera'
        subtitle='Info about person'
      />
    <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UGCGRFT2P-f2ff4fe456b5-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#222E44' }}
        title='Doc Jones'
        subtitle='Info about person'
      />
    <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UGGFY1C5A-0e7e5f400150-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#222E44' }}
        title='Edwin Parker'
        subtitle='Info about person'
      />
    <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UGGEENM52-2c89c17c2331-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#222E44' }}
        title='Efrain Vazquez'
        subtitle='Info about person'
      />
    <Slide
        media={<img src='https://ca.slack-edge.com/T4JUEB3ME-UHNLF57NG-0e318399719b-72' alt="text"/>}
        mediaBackgroundStyle={{ backgroundColor: 'white' }}
        style={{ backgroundColor: '#222E44' }}
        title='Zach Imbriaco'
        subtitle='Info about person'
      />
  </AutoRotatingCarousel>
</div>
      
    </Card> 


    </div>
  );
};

export default Team;

