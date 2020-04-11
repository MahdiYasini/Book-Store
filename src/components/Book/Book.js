import React from 'react'
import "./style/Book.css";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import withMonthNameDateAndTime from '../../services/timeHandler/timeHandler';

const useStyles = makeStyles({
    root: {
        minWidth: 340,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Book = ({ bookInfo }) => {
    const classes = useStyles();
    // console.log('new Date(publishedDate.$date)', new Date(bookInfo.publishedDate.$date))
    // console.log('bookInfo.publisedhDate', bookInfo.publishedDate.$date)

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography align="center" variant="h5" component="h2">
                    {bookInfo.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    ISBN: {bookInfo.isbn}
                </Typography>
                <Typography variant="body2" component="p">
                    {(bookInfo.shortDescription) ? bookInfo.shortDescription : "Read More..."}
                </Typography>
                <Typography>
                    {(bookInfo.publishedDate) ? withMonthNameDateAndTime(bookInfo.publishedDate.$date) : "No Date Info"}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Book;