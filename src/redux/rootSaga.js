import {all} from 'redux-saga/effects';
import productSaga from './saga/productSaga';
import authSaga from './saga/authSaga';
import categorySaga from './saga/categorySaga';

export default function* rootSaga() {
  yield all([authSaga(), productSaga(), categorySaga()]);
}
