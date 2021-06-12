import {all} from 'redux-saga/effects';
import productSaga from './saga/productSaga';
import authSaga from './saga/authSaga';

export default function* rootSaga() {
  yield all([authSaga(), productSaga()]);
}
