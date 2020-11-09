import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
// const stringEnhancer = (createStore) => (...args) => {
//     const store = createStore( ...args );
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         if (typeof action === 'string'){
//             return originalDispatch({
//                 type: action
//             })
//         }
//         return originalDispatch(action)
//     };
//     return store;
// }
// const loginEnhancer = (createStore) => (...args) => {
//     const store = createStore( ...args );
//     const originalDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         console.log(action.type)
        
//         return originalDispatch(action)
//     };
//     return store;
// }

const logMidelware = () => (dispatch) => (action) => {
    console.log(action.type)
        
     return dispatch(action)
}
const stringMedelware = () => ( dispatch ) => ( action ) =>{
    if (typeof action === 'string'){
        return dispatch({
            type: action
        })
    }
    return dispatch(action)
}
const store = createStore(reducer, applyMiddleware(stringMedelware, logMidelware));
export default store;