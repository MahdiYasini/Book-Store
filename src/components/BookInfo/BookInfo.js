import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography, makeStyles, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions/index';

import withMonthNameDateAndTime from '../../services/timeHandler/timeHandler';

const useStyle = makeStyles(theme => ({
    baseData: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        borderBottom: "1px solid black"
    },
    moreData: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    inputNumber: {
        '& > *': {
            margin: theme.spacing(1),
            width: '10ch',
        },
    },
    addToCart: {
        display: "flex",
        justifyContent: "center",
        margin: "0 auto"
    }

}));

const BooksContainer = (props) => {
    const classes = useStyle();


    const [error, setError] = useState(false);
    const [numberOfBook, setNumberOfBook] = useState(1);

    const numberChangeHandler = ({ target: { value } }) => {
        (!(0 < Number(value) && Number(value) < 11) ? setError(true) : setError(false));
        setNumberOfBook( Number(value));
    }

    return (
        <Box
            p={1}
            m={1}
            bgcolor="background.paper"
            css={{ maxWidth: "100%" }}>
            <Typography
                align="center"
                variant="h5"
                component="h2">
                {(props.selectedBookInfo) ? props.selectedBookInfo.title : "need to resolve"}
            </Typography>
            <div className={classes.baseData}>
                <Typography variant="body2" color="textSecondary">
                    ISBN: {(props.selectedBookInfo) ? props.selectedBookInfo.isbn : "need to resolve"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Date: {(props.selectedBookInfo.publishedDate) ? withMonthNameDateAndTime(props.selectedBookInfo.publishedDate.$date) : "need to resolve"}
                </Typography>
            </div>
            <div style={{ border: "1px solid black", margin: "1.1rem", padding: "0.5rem" }}>
                <Typography variant="h6" component="p">
                    {(props.selectedBookInfo) ? props.selectedBookInfo.longDescription : "need to resolve"}
                </Typography>
            </div>
            <div className={classes.moreData}>
                <Typography>
                    Page count: {(props.selectedBookInfo) ? props.selectedBookInfo.pageCount : "need to resolve"}
                </Typography>
                <Typography>
                    Authors: {(props.selectedBookInfo) ? props.selectedBookInfo.authors.map(author => `${author}, `) : "need to resolve"}
                </Typography>
                <Typography>
                    Categories: {(props.selectedBookInfo) ? props.selectedBookInfo.categories.map(category => `${category}, `) : "need to resolve"}
                </Typography>
            </div>
            <div className={classes.addToCart}>
                {error ?
                    <Typography
                        style={{ margin: "1.1rem" }}
                        color="error">
                        Please enter correct number (1 to 10) .
                                </Typography>
                    :
                    <Link 
                    onClick = {() => props.onAddToCart({book: {title: props.selectedBookInfo.title, isbn: props.selectedBookInfo.isbn, shortDescription: props.selectedBookInfo.shortDescription, publishedDate: props.selectedBookInfo.publishedDate}, number: numberOfBook})}
                    to="/">
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ margin: "1.1rem" }}>
                            Add To Cart
                    </Button>
                    </Link>
                }

                <TextField
                    className={classes.inputNumber}
                    type="number"
                    id="standard-basic"
                    label="How many?"
                    InputProps={{ inputProps: { min: 1, max: 10 } }}
                    onChange={(event) => numberChangeHandler(event)}
                    defaultValue="1"
                />
            </div>
        </Box >
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (bookInfo) => {dispatch(actionTypes.addToCart(bookInfo))}
    }
};

const mapStateToProps = state => {
    return {
        selectedBookInfo: state.selectedBook
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);