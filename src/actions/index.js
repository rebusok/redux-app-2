const booksReq = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}
const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};


const booksError = (error) => {
    return {
        type: "FETCH_BOOKS_FAILURE",
        payload: error
    }
};
const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const bookRemoveFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVE_FROM_CART',
        payload: bookId
    }
}
const allBookRemoveFromCart = (bookId) => {
    return {
        type: 'ALL_BOOK_REMOVE_FROM_CART',
        payload: bookId
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
    dispatch(booksReq());
    bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
}
export {    
    fetchBooks,
    bookAddedToCart,
    bookRemoveFromCart,
    allBookRemoveFromCart
}