import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductsActions } from '../ducks/products';
import { Creators as ErrorsActions } from '../ducks/error';

export function* getProducts(action) {
    try {
        const response = yield call(api.get, `/category_products/${action.payload.categoryId}`);

        yield put(ProductsActions.getProductsSuccess(response.data.products));
    } catch (err) {
        yield put(ErrorsActions.setError('danger', 'Não foi possível listar os produtos.'));
    }
}
