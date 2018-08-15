import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductDetailsActions } from '../ducks/productDetails';
import { Creators as ErrorsActions } from '../ducks/error';

export function* getProductDetails(action) {
    try {
        const response = yield call(api.get, `/products/${action.payload.id}`);

        yield put(ProductDetailsActions.getProductDetailsSuccess(response.data));
    } catch (err) {
        yield put(
            ErrorsActions.setError('danger', 'Não foi possível carregar os detalhes do produto.'),
        );
    }
}
