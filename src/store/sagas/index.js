import { all, takeLatest } from 'redux-saga/effects';

import { CategoriesTypes } from '~/store/ducks/categories';
import { CartTypes } from '~/store/ducks/cart';
import { load, loadProducts } from './categories';
import { addProduct } from './cart';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.LOAD_REQUEST, load),
    takeLatest(CategoriesTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
    takeLatest(CartTypes.ADD_PRODUCT_REQUEST, addProduct),
  ]);
}
