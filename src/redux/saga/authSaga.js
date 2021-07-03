import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import * as RootNavigation from '../rootNavigation';
import {apiUrl} from '../constants';

import {
  setAccessToken,
  getAccessToken,
  deleteAccessToken,
  deleteAccessCart,
} from '../../utils/asyncStorage';
import setAuthToken from '../../utils/setAuthToken';
import {
  loginPending,
  loginSuccess,
  loginFail,
  authUser,
  registerSuccess,
  registerFail,
  logout,
  updateSuccess,
  updateFalse,
  updatePending,
} from '../slice/authSlice';
import {getCartSaga} from './cartSaga';
import {billsPending} from '../slice/cartSlice';

function* getUser() {
  var token = yield call(getAccessToken);
  if (token) {
    yield call(setAuthToken, token);

    var {data} = yield call(axios.get, `${apiUrl}/auth/user`);
    if (data.success) {
      var user = data.user;
      yield put({type: authUser.type, payload: {user: user}});
      yield put({type: billsPending.type});
    }
  } else yield call(setAuthToken, null);
}

function* logoutUser() {
  yield call(setAuthToken, null);
  yield call(deleteAccessToken);
  yield call(deleteAccessCart);
  yield call(getCartSaga);
}

export function* loginUser(action) {
  try {
    const {payload} = action;
    const {data} = yield call(
      axios.post,
      `${apiUrl}/auth/login`,
      payload.values,
    );
    if (data.success) {
      yield put({type: loginSuccess.type});
      yield call(setAccessToken, data.token);
      yield call(getUser);
    } else {
      yield put({type: loginFail.type, payload: {errors: data.errors}});
      // deleteAccessToken();
    }
  } catch (error) {
    console.log(error);
  }
}

export function* registerUser(action) {
  try {
    const {payload} = action;
    const {data} = yield call(
      axios.post,
      `${apiUrl}/auth/register`,
      payload.values,
    );
    if (data.success) {
      yield put({type: registerSuccess.type});
      yield call(setAccessToken, data.token);
      // setAccessToken(data.token);
      yield call(getUser);
    } else {
      yield put({type: registerFail.type, payload: {errors: data.errors}});
      // deleteAccessToken();
    }
  } catch (error) {
    console.log(error);
  }
}

function* updateProfile(action) {
  const {payload} = action;
  const {data} = yield call(
    axios.put,
    `${apiUrl}/auth/editProfile`,

    payload.values,
  );
  if (data.success) {
    yield put({type: updateSuccess.type, payload: {user: data.user}});
    RootNavigation.goBack();
  } else yield put({type: updateFalse.type, payload: {errors: data.errors}});
}

function* workerProductSaga() {
  yield takeEvery(loginPending.type, loginUser);
  yield takeEvery(loginPending.type, registerUser);
  yield takeEvery(logout.type, logoutUser);
  yield takeEvery(updatePending.type, updateProfile);
}

export default function* productSaga() {
  yield all([getUser(), workerProductSaga()]);
}
