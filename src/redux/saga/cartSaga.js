import {all, takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {
  getAccessCart,
  setAccessCart,
  deleteAccessCart,
} from '../../utils/asyncStorage';
import {apiUrl} from '../constants';
import * as RootNavigation from '../rootNavigation';
import {
  addPending,
  addToCart,
  clearItemPending,
  getCart,
  paymentFail,
  paymentPending,
  paymentSuccess,
  removePending,
  removeToCard,
} from '../slice/cartSlice';

export function* getCartSaga() {
  var cart = yield call(getAccessCart);
  console.log(cart);
  if (cart) {
    yield put({type: getCart.type, payload: {cart: cart}});
  } else {
    console.log('cart null');
  }
}

function* addToCartSaga(action) {
  const {payload} = action;
  var cart = yield call(getAccessCart),
    product = payload.product,
    quantity = payload.quantity;
  if (cart === null) {
    cart = {
      products: [],
      total: 0,
    };
  }

  let index = cart.products.findIndex(x => x.product._id === product._id);

  if (index >= 0) {
    cart.products[index].quantity = cart.products[index].quantity + quantity;
    cart.total =
      cart.total +
      (product.price - product.price * (product.discount / 100)) * quantity;
    yield call(setAccessCart, cart);
    yield put({type: addToCart.type, payload: {cart: cart}});
  } else {
    cart.products.push({
      product,
      quantity,
    });
    cart.total =
      cart.total +
      (product.price - product.price * (product.discount / 100)) * quantity;
    yield call(setAccessCart, cart);
    yield put({type: addToCart.type, payload: {cart: cart}});
  }
}

function* minusItemSaga(action) {
  const {payload} = action;
  var product = payload.product;
  var cart = yield call(getAccessCart);

  let index = cart.products.findIndex(x => x.product._id === product._id);

  if (cart.products[index].quantity === 1) {
    cart.total =
      cart.total - (product.price - (product.price * product.discount) / 100);
    cart.products.splice(index, 1);
    yield call(setAccessCart, cart);
    yield put({type: removeToCard.type, payload: {cart: cart}});
  } else {
    cart.products[index].quantity--;
    cart.total =
      cart.total - (product.price - (product.price * product.discount) / 100);
    yield call(setAccessCart, cart);
    yield put({type: removeToCard.type, payload: {cart: cart}});
  }
}

function* removeItemSaga(action) {
  const {payload} = action;
  var product = payload.product;
  var cart = yield call(getAccessCart);

  let index = cart.products.findIndex(x => x.product._id === product._id);
  let minus =
    (product.price - (product.price * product.discount) / 100) *
    cart.products[index].quantity;

  cart.total = cart.total - minus;
  cart.products.splice(index, 1);

  yield call(setAccessCart, cart);
  yield put({type: removeToCard.type, payload: {cart: cart}});
}

function* paymentSaga() {
  const cart = yield call(getAccessCart);
  let products = [];
  cart.products.map(x => {
    let product = {
      product: x.product._id,
      quantity: x.quantity,
    };
    products.push(product);
  });
  const values = {
    products: products,
    total: cart.total,
  };

  let {data} = yield call(axios.post, `${apiUrl}/cart/addBill`, values);

  if (data.success) {
    yield call(deleteAccessCart);
    yield put({type: paymentSuccess.type});
    RootNavigation.navigate('OrderAccepted');
  } else {
    yield put({type: paymentFail.type, payload: {error: data.error}});
    RootNavigation.navigateRoute('OrderFail', {error: data.error});
  }
}

function* cartWorker() {
  yield takeEvery(addPending.type, addToCartSaga);
  yield takeEvery(removePending.type, minusItemSaga);
  yield takeEvery(clearItemPending.type, removeItemSaga);
  yield takeEvery(paymentPending.type, paymentSaga);
}
export default function* cartSaga() {
  console.log('cartSaga active');
  yield all([getCartSaga(), cartWorker()]);
}
