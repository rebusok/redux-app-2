const initialState = {
    books: [],
    loading: true
}

const reducer = (state = initialState, action) => {

    switch (action.type){
        case "BOOKS_REQ":
            return{
                books: [],
                loading: true
            }
        case 'BOOKS_LOADED':
            return {
                books: action.payload,
                loading: false
            };
        default:
            return state;
    }    
}

export default reducer;