import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'

import thunk from 'redux-thunk'
import { cartReducer } from './Reducer/CartReducer'

import { productDetailReducer, productListReducer } from './Reducer/ProductReducer'

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer

})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {

    cart: { cartItems: cartItemsFromLocalStorage }
}

const middleware = [thunk]

const store = legacy_createStore(reducer, initialState, applyMiddleware(...middleware))

export default store

