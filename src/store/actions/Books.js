import * as actionTypes from "./actionTypes";

export const selectBook = (bookInfo) => {
    return {
        type: actionTypes.SELECT_BOOK,
        bookInfo
    }
};

export const deleteSelectedBook = (bookInfo) => {
    return {
        type: actionTypes.DELETE_SELECTED_BOOK,
        bookInfo
    }
};

export const buyBooks = (booksInfo) => {
    return {
        type: actionTypes.BUY_BOOKS,
        booksInfo
    }
};