import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    selectedBook: null,
    booksInCart: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_BOOK:
            return updateObject(state, {
                selectedBook: action.bookInfo
            });

        case actionTypes.ADD_TO_CART:
            return updateObject(state, {
                booksInCart: state.booksInCart.concat(action.booksInfo),
            });

        case actionTypes.DELETE_BOOK_FROM_CART:
            return updateObject(state, {
                selectedBooks: state.selectedBooks.filter(book => book.name !== action.bookInfo.name)
            })

        default:
            return state;
    }
}

export default reducer;