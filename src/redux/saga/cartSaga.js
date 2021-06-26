import {all, takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {getAccessCart, setAccessCart} from '../../utils/asyncStorage';
import {
  addPending,
  addToCart,
  clearItemPending,
  getCart,
  removePending,
  removeToCard,
} from '../slice/cartSlice';

function* getCartSaga() {
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

function* cartWorker() {
  yield takeEvery(addPending.type, addToCartSaga);
  yield takeEvery(removePending.type, minusItemSaga);
  yield takeEvery(clearItemPending.type, removeItemSaga);
}
export default function* cartSaga() {
  console.log('cartSaga active');
  yield all([getCartSaga(), cartWorker()]);
}
