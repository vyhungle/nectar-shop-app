import {call, put, takeEvery, all} from 'redux-saga/effects';
import {
  filterPending,
  productsPending,
  filterSuccess,
  sortPending,
  filterFail,
  findPending,
  findSuccess,
  findFail,
  checkCategory,
} from '../slice/productSplice';
import axios from 'axios';

export function* workerSaga() {
  try {
    yield put({type: productsPending.type});
    const {data} = yield call(
      axios.get,
      'https:/nectar-server.herokuapp.com/api/product/all',
    );
    const products = data.products.sort(() => Math.random() - 0.5);
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
  // console.log(payload.products);
  var res = payload.products.filter(x => x.category === payload.id);
  if (res.length !== 0) {
    yield put({type: filterSuccess.type, payload: {products: res}});
  } else {
    yield put({type: filterFail.type});
  }
}

function* sortProduct(action) {
  const {payload} = action;
  var products = payload.products;
  var res;
  if (payload.type === 1) {
    res = products.slice().sort((a, b) => a.price - b.price);
  } else {
    res = products.slice().sort((a, b) => b.price - a.price);
  }
  yield put({type: filterSuccess.type, payload: {products: res}});
}

//search
function* searchProduct(action) {
  const {payload} = action;

  var res = payload.products.filter(
    x => x.name.toLowerCase().indexOf(payload.key.toLowerCase()) > -1,
  );
  if (res.length > 0) {
    yield put({type: findSuccess.type, payload: {products: res}});
  } else {
    yield put({type: findFail.type});
  }
}

function* workerFilter() {
  yield takeEvery(findPending.type, searchProduct);
  yield takeEvery(filterPending.type, filterProduct);
  yield takeEvery(sortPending.type, sortProduct);
}

export default function* productSaga() {
  console.log('product saga');
  yield all([workerSaga(), workerFilter()]);
}
