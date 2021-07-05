import {all} from 'redux-saga/effects';
import productSaga from './saga/productSaga';
import authSaga from './saga/authSaga';
import categorySaga from './saga/categorySaga';
import cartSaga from './saga/cartSaga';
import addressSaga from './saga/addressSaga';
import favoriteSaga from './saga/favoriteSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    productSaga(),
    categorySaga(),
    cartSaga(),
    addressSaga(),
    favoriteSaga(),
  ]);
}
