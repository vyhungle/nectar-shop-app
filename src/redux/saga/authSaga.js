import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import {
  setAccessToken,
  getAccessToken,
  deleteAccessToken,
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
} from '../slice/authSlice';

function* getUser() {
  console.log('get user');
  var user = null;
  var token = yield call(getAccessToken);
  if (token) {
    const decodedToken = jwtDecode(token);
    user = decodedToken;
    yield call(setAccessToken, token);
  }
  if (user !== null) {
    yield put({type: authUser.type, payload: {user: user}});
  } else {
    yield call(setAuthToken, null);
  }
}

function* logoutUser() {
  console.log('logout');
  yield call(setAuthToken, null);
  yield call(deleteAccessToken);
}

export function* loginUser(action) {
  try {
    const {payload} = action;
    const {data} = yield call(
      axios.post,
      'https:/nectar-server.herokuapp.com/api/auth/login',
      payload.values,
    );
    if (data.success) {
      yield put({type: loginSuccess.type});
      yield call(setAccessToken, data.token);
      // setAccessToken(data.token);
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
      'https:/nectar-server.herokuapp.com/api/auth/register',
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

function* workerLogin() {
  yield takeEvery(loginPending.type, loginUser);
}

function* workerRegister() {
  yield takeEvery(loginPending.type, registerUser);
}
function* workerLogout() {
  yield takeEvery(logout.type, logoutUser);
}

export default function* productSaga() {
  yield all([getUser(), workerLogin(), workerRegister(), workerLogout()]);
}
