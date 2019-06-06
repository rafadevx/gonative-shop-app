import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
  loadProductsRequest: ['id'],
  loadProductsSuccess: ['products'],
  lodaProductsFailure: null,
});

export const CategoriesTypes = Types;

export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  data: [],
  products: [],
  loadingCategories: false,
  loadingProducts: false,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_REQUEST]: state => state.merge({ loadingCategories: true }),
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data, loadingCategories: false }),
  [Types.LOAD_PRODUCTS_REQUEST]: state => state.merge({ loadingProducts: true }),
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, { products }) => state.merge({ products, loadingProducts: false }),
});
