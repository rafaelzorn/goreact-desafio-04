import { combineReducers } from 'redux';

import categories from './categories';
import products from './products';
import productDetails from './productDetails';
import cart from './cart';
import error from './error';

export default combineReducers({
    categories,
    products,
    productDetails,
    cart,
    error,
});
