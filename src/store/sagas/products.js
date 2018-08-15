import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductsActions } from '../ducks/products';
import { Creators as ErrorsActions } from '../ducks/error';

export function* getProducts() {
    try {
        const response = yield call(api.get, '/products');

        yield put(ProductsActions.getProductsSuccess(response.data));
    } catch (err) {
        yield put(ErrorsActions.setError('danger', 'Não foi possível carregar os produtos.'));
    }
}

export function* getProductsByCategoryId(action) {
    try {
        const response = yield call(api.get, `/category_products/${action.payload.id}`);

        yield put(ProductsActions.getProductsSuccess(response.data.products));
    } catch (err) {
        yield put(ErrorsActions.setError('danger', 'Não foi possível carregar os produtos.'));
    }
}
