import {all, takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {apiUrl} from '../constants';
import {
  favoritePending,
  favoriteSuccess,
  likeFavoritePending,
  likeFavoriteSuccess,
} from '../slice/favoriteSlice';

function* getFavoriteSaga() {
  const {data} = yield call(axios.get, `${apiUrl}/favorite/my`);
  if (data.success) {
    yield put({
      type: favoriteSuccess.type,
      payload: {favorites: data.favorites},
    });
  }
}

function* likeSaga(action) {
  const {payload} = action;
  const {data} = yield call(axios.put, `${apiUrl}/favorite/like/${payload.id}`);
  if (data.success) {
    yield put({
      type: likeFavoriteSuccess.type,
      payload: {data: data},
    });
  }
}

function* favoriteWorker() {
  yield takeEvery(favoritePending.type, getFavoriteSaga);
  yield takeEvery(likeFavoritePending.type, likeSaga);
}

export default function* favoriteSaga() {
  console.log('favorite active');
  yield all([favoriteWorker()]);
}
