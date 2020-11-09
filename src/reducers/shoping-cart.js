const updateShopingCart = (state, action) => {
    if (state === undefined){
        return {
            cartItems: [],
            orderTotal: 0, 
            oderCount: 0
        }
    }
    switch(action.type){
        case "BOOK_ADDED_TO_CART":
            return updateOrder(state, action.payload, 1)            
        case 'BOOK_REMOVE_FROM_CART':
            return updateOrder(state, action.payload, -1) 
        case 'ALL_BOOK_REMOVE_FROM_CART':    
         const item = state.shopingCart.cartItems.find(({id}) => id === action.payload);
         return updateOrder(state, action.payload, -item.count); 
         default:
            return state.shopingCart;
    }
}

const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0){
        return [
            
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
            
        ]
    }
    
    
    if (idx === -1){
        return [
            ...cartItems,
            item
        ]
    }else {
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ]
    }
}

const updateCartItem = (book, item = {}, quantily) => {
    const {
        id = book.id, 
        title = book.title,
        count = 0, 
        total = 0} = item;

    return {
        id,
        title,
        count: count + quantily,
        total: total + quantily*book.price
    }
}
const updateTotal = (cartItems) => {
    if (cartItems.length < 1){
        return 0
    }
    return cartItems.map(i => i.total).reduce((a, b) => a +b)         
}
const updateCount = (cartItems) => {
    if (cartItems.length < 1){
        return 0
    }
    return cartItems.map(i => i.count).reduce((a, b) => a +b)  
}

const updateOrder = (state, bookId, quantily) => {
    
    const { bookList: {books}, shopingCart: {cartItems}} = state;
    const book = books.find(({id}) => id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];
    
    const newItem = updateCartItem(book, item, quantily);
    const newcardItem = updateCartItems(cartItems, newItem, itemIndex);
    return{
        
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: updateTotal(newcardItem),
        oderCount: updateCount(newcardItem)
    }; 
}

export default updateShopingCart;