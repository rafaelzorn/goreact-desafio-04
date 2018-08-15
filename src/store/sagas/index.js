import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '../ducks/categories';
import { Types as ProductsTypes } from '../ducks/products';
import { Types as ProductDetailsTypes } from '../ducks/productDetails';

import { getCategories } from './categories';
import { getProducts, getProductsByCategoryId } from './products';
import { getProductDetails } from './productDetails';

export default function* rootSaga() {
    yield all([
        takeLatest(CategoriesTypes.GET_REQUEST, getCategories),
        takeLatest(ProductsTypes.GET_REQUEST, getProducts),
        takeLatest(ProductsTypes.GET_REQUEST_BY_CATEGORY_ID, getProductsByCategoryId),
        takeLatest(ProductDetailsTypes.GET_REQUEST, getProductDetails),
    ]);
}
