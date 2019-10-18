import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: "700px",
    height: "120px",
    margin: "150px auto",
    backgroundColor: "black",
    color: "white"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Learn = props => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Project designed to automate the process of manaually assiging
            incoming Lambda students to their Labs teams, saving Lambda over 100
            staff hours!
          </Typography>
        </CardContent>
      </Card>
      <div>
        <h2>Presentation Video</h2>
        <h3>Presentation for Shark Day</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EuPSibuIKIg"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h4>
          This video demonstrates to stakeholders and possible investors the
          ability of Labby to effectively sort students at the end of release
          canvas 2
        </h4>
      </div>
    </div>
  );
};

export default Learn;
