import React from "react";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import "./compstyle.css"

const Learn = props => {
  return (
    <div className="wholelearn">
      <div className="labbyinfo">
        <p className="labbyp">
          Labby is designed to automate Lambda school’s process of manually assigning incoming student to their teams. The goal of Labby is to save Lambda School hundreds of man hours each year.
        </p>
      </div>
      <Card className="card">
        <CardActionArea>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/Iuf84hWPqzQ" 
                frameborder="10" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>        
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Labby is a set of <strong>Lambda functions</strong> that handle processes involved in running the labs program and interacts with students and staff through a slackbot. <strong>AWS Lambda and RDS</strong> were used to take advantage of the Separation of Concerns principle. We also took advantage of the Principle of Least Privilege to protect Lambda School’s security concerns.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Learn;