import {call, put, takeEvery, all} from 'redux-saga/effects';
import {productsPending} from '../slice/productSplice';
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

export default function* productSaga() {
  console.log('product saga');
  yield all([workerSaga()]);
}
