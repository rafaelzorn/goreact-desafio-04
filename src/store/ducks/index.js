import { combineReducers } from 'redux';

import categories from './categories';
import products from './products';
import productDetails from './productDetails';
import error from './error';

export default combineReducers({
    categories,
    products,
    productDetails,
    error,
});
