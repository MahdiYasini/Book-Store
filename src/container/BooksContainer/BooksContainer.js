import React from 'react'
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core'
import { connect } from 'react-redux';

import bookDB from "../../DB/books.json";

import * as actionTypes from '../../store/actions/index';

import Book from '../../components/Book/Book'

import "./styles/BookContainer.css";



const BooksContainer = (props) => {
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="column"
            p={1}
            m={1}
            bgcolor="background.paper"
            css={{ maxWidth: "100%" }}>
            {bookDB.map((book, index) => (
                <Box key = {book.title + index} m = {1} p={1} bgcolor="grey.300" flex="1">
                    <Link to="/bookInfo" onClick = {() => props.onSelectBook(book)}>
                        <Book key={book.title + index} bookInfo={book} />
                    </Link>
                </Box>
            ))}
        </Box>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectBook: (bookInfo) => dispatch(actionTypes.selectBook(bookInfo))
    }
};

export default connect(null, mapDispatchToProps)(BooksContainer);