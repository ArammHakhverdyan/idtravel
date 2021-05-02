import React from "react";
import { makeStyles, Typography, Paper } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@material-ui/lab';


const TourTimeLine = (props) => {
    const classes = useStyles();
    const data = props.data;

    return (
        <Timeline align="alternate">
            {data.map((item) =>
                <TimelineItem key={item.id}>
                    <TimelineOppositeContent>
                        <Typography variant="body1" color="textSecondary">
                            Day {item.day}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined" />
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography>
                                {item.title}
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            )}
        </Timeline>
    )
}

export default TourTimeLine;


const useStyles = makeStyles((theme) => ({
    paper: {
        minHeight: "50px",
        padding: '10px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.primary.main,
    },
}));