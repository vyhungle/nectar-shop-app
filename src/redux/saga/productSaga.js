import {call, put, takeEvery, all} from 'redux-saga/effects';
import {
  filterPending,
  productsPending,
  filterSuccess,
  sortPending,
} from '../slice/productSplice';
import axios from 'axios';

export function* workerSaga() {
  try {
    yield put({type: productsPending.type});
    const {data} = yield call(
      axios.get,
      'https:/nectar-server.herokuapp.com/api/product/all',
    );
    const products = data.products;
    // dispatch a success action to the store with the new dog
    yield put({type: 'products/productsSuccess', payload: {products}});
    yield put({type: 'products/productsFail'});
  } catch (error) {
    // dispatch a failure action to the store with the error
    console.log(error);
  }
}
function* filterProduct(action) {
  const {payload} = action;
  var res = payload.products.filter(x => x.category === payload.categoryId);
  yield put({type: filterSuccess.type, payload: {products: res}});
}

function* sortProduct(action) {
  const {payload} = action;
  var products = payload.products;
  console.log(payload);
  var res;
  if (payload.type === 1) {
    res = products.slice().sort((a, b) => a.price - b.price);
  } else {
    res = products.slice().sort((a, b) => b.price - a.price);
  }
  yield put({type: filterSuccess.type, payload: {products: res}});
}
function* workerFilter() {
  yield takeEvery(filterPending.type, filterProduct);
  yield takeEvery(sortPending.type, sortProduct);
}

export default function* productSaga() {
  console.log('product saga');
  yield all([workerSaga(), workerFilter()]);
}
