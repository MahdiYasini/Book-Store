import * as actionTypes from "./actionTypes";

export const selectBook = (bookInfo) => {
    return {
        type: actionTypes.SELECT_BOOK,
        bookInfo
    }
};

export const addToCart = (booksInfo) => {
    return {
        type: actionTypes.ADD_TO_CART,
        booksInfo
    }
}

export const deleteBookFromCart = (bookName) => {
    return {
        type: actionTypes.DELETE_BOOK_FROM_CART,
        bookName
    }
};

export const buyBooks = (booksInfo) => {
    return {
        type: actionTypes.BUY_BOOKS,
        booksInfo
    }
};