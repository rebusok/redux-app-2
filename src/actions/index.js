const booksLoaded = (newBooks) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    };
};

const booksReq = () => {
    return {
        type: 'BOOKS_REQ'
    }
}
export {
    booksLoaded,
    booksReq
}