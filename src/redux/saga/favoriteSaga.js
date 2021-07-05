import {all, takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {apiUrl} from '../constants';
import {favoritePending, favoriteSuccess} from '../slice/favoriteSlice';

function* getFavoriteSaga() {
  const {data} = yield call(axios.get, `${apiUrl}/favorite/my`);
  if (data.success) {
    yield put({
      type: favoriteSuccess.type,
      payload: {favorites: data.favorites},
    });
  }
}

function* favoriteWorker() {
  yield takeEvery(favoritePending.type, getFavoriteSaga);
}

export default function* favoriteSaga() {
  console.log('favorite active');
  yield all([favoriteWorker()]);
}
