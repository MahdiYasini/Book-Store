import React from 'react'
import { Link } from 'react-router-dom';
import { Box, makeStyles, Button } from '@material-ui/core'
import { connect } from 'react-redux';

import bookDB from "../../DB/books.json";

import * as actionTypes from '../../store/actions/index';

import Book from '../../components/Book/Book'

const useStyle = makeStyles({
    book: {
        display: "flex",
        "& div": {
            width: "100%",
            margin: "0.5rem"
        }, 
        "& button": {
            margin: "1.55rem"
        },
        "& p": {
            margin: "auto"
        }
    },
}) 


const BooksContainer = (props) => {
    const classes = useStyle();
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="column"
            p={1}
            m={1}
            bgcolor="background.paper"
            css={{ maxWidth: "100%" }}>
            {props.booksInCart.map((bookInformation, index) => (
                <Box className = {classes.book} key = {index} m = {1} p={1} bgcolor="grey.300" flex="1">
                        <Book key={bookInformation.book.title + index} bookInfo={bookInformation.book} />
                        <p>Number: {bookInformation.number}</p>
                        <Button className = {classes.button} color="secondary" onClick = {() => props.onDeleteItem(bookInformation.book.title)}>
                            Delete this item.
                        </Button>
                </Box>
            ))}
        </Box>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteItem: (bookName) => dispatch(actionTypes.deleteBookFromCart(bookName))
    }
};

const mapStateToProps = state => {
    return {
        booksInCart: state.booksInCart
    }
}

// booksInCart: Array(4)
// 0:
// book: {title: "Android in Action, Second Edition", isbn: "1935182722", shortDescription: "Android in Action, Second Edition is a comprehensi…ures by building useful and intriguing examples. ", publishedDate: {…}}
// number: 1

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);