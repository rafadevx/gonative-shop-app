import { select, put } from 'redux-saga/effects';

import CartActions from '~/store/ducks/cart';

export function* addProduct({ product }) {
  const productData = {
    id: product.id,
    name: product.name,
    brand: product.brand,
    price: product.price,
    image: product.image,
    quantity: 1,
  };

  let products = yield select(state => state.cart.products);

  const index = products.findIndex(item => item.id === product.id);

  if (index >= 0) {
    productData.quantity += 1;
    console.tron.log(productData);
    const newProducts = products.map((prod) => {
      if (prod.id === product.id) {
        return productData;
      }
      return prod;
    });
    console.tron.log(newProducts);
    products = newProducts;
  } else {
    products = [...products, productData];
  }

  yield put(CartActions.addProductSuccess(products));
}
