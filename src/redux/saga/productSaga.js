import {call, put, takeEvery} from 'redux-saga/effects';
import {productsPending} from '../slice/productSplice';
import axios from 'axios';

export function* workerSaga() {
  try {
    const {data} = yield call(
      axios.get,
      'http://localhost:5000/api/product/all',
    );
    const products = data.products;
    console.log(data);
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
  yield takeEvery(productsPending().type, workerSaga);
}
