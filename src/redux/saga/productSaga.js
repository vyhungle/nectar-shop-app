import {call, put, takeEvery, all} from 'redux-saga/effects';
import {
  filterPending,
  productsPending,
  filterSuccess,
  filterFail,
  findPending,
  findSuccess,
  findFail,
  reviewSuccess,
  reviewPending,
  singleProduct,
} from '../slice/productSplice';
import axios from 'axios';
import {apiUrl} from '../constants';
import * as RootNavigation from '../rootNavigation';

export function* workerSaga() {
  try {
    yield put({type: productsPending.type});
    const {data} = yield call(axios.get, `${apiUrl}/product/all`);
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
  const categoriesId = payload.value.categoriesId;
  const isSort = payload.value.isSort;
  const priceZone = payload.value.priceZone;

  var products = [];
  if (categoriesId.length > 0) {
    categoriesId.map(id => {
      products = products.concat(
        payload.value.products.filter(x => x.category === id),
      );
    });
  } else products = payload.value.products;

  products = products.filter(
    x => x.price >= priceZone[0] && x.price <= priceZone[1],
  );

  if (isSort === 1) {
    products = products.slice().sort((a, b) => a.price - b.price);
  } else if (isSort === -1) {
    products = products.slice().sort((a, b) => b.price - a.price);
  }

  if (products.length !== 0) {
    yield put({type: filterSuccess.type, payload: {products: products}});
  } else {
    yield put({type: filterFail.type});
  }
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

//Review
function* RenewSaga(action) {
  let {payload} = action;
  let id = payload.values.id;
  console.log(payload);
  let {data} = yield call(
    axios.put,
    `${apiUrl}/product/review/${id}`,
    payload.values,
  );

  let response = {
    id: id,
    review: data.review,
  };
  yield put({type: reviewSuccess.type, payload: {response: response}});
  yield put({type: singleProduct.type, payload: {id: id}});
  RootNavigation.goBack();
}

function* workerFilter() {
  yield takeEvery(findPending.type, searchProduct);
  yield takeEvery(filterPending.type, filterProduct);
  yield takeEvery(reviewPending.type, RenewSaga);
}

export default function* productSaga() {
  console.log('product saga');
  yield all([workerSaga(), workerFilter()]);
}
