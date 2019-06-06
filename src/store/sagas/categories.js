import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';

export function* load() {
  try {
    const response = yield call(api.get, 'categories');
    yield put(CategoriesActions.loadSuccess(response.data));
  } catch (err) {
    yield put(CategoriesActions.loadFailure());
  }
}

export function* loadProducts({ id }) {
  try {
    const response = yield call(api.get, `category_products/${id}`);
    yield put(CategoriesActions.loadProductsSuccess(response.data.products));
  } catch (err) {
    yield put(CategoriesActions.lodaProductsFailure());
  }
}
