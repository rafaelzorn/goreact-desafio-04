import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as CategoriesActions } from '../ducks/categories';
import { Creators as ErrorsActions } from '../ducks/error';

export function* getCategories() {
    try {
        const response = yield call(api.get, '/categories');

        yield put(CategoriesActions.getCategoriesSuccess(response.data));
    } catch (err) {
        yield put(ErrorsActions.setError('danger', 'Não foi possível listar as categorias.'));
    }
}
