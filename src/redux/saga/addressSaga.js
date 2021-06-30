import {all, takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {
  chooseCity,
  chooseDistrict,
  cityPending,
  citySuccess,
  clearAddress,
  clearWard,
  districtPending,
  districtSuccess,
  wardPending,
  wardSuccess,
} from '../slice/addressSlice';

function* getCity() {
  yield put({type: cityPending.type});
  const {data} = yield call(
    axios.get,
    'https://thongtindoanhnghiep.co/api/city',
  );
  yield put({type: citySuccess.type, payload: {city: data.LtsItem}});
}

function* getDistrict(action) {
  const {payload} = action;
  const {data} = yield call(
    axios.get,
    `https://thongtindoanhnghiep.co/api/city/${payload.value.ID}/district`,
  );

  yield put({type: districtSuccess.type, payload: {district: data}});
  yield put({type: chooseCity.type, payload: {value: payload.value}});
  yield put({type: clearAddress.type});
}

function* getWard(action) {
  const {payload} = action;
  const {data} = yield call(
    axios.get,
    `https://thongtindoanhnghiep.co/api/district/${payload.value.ID}/ward`,
  );
  yield put({type: wardSuccess.type, payload: {ward: data}});
  yield put({type: chooseDistrict.type, payload: {value: payload.value}});
  yield put({type: clearWard.type});
}

function* addressWorker() {
  yield takeEvery(districtPending.type, getDistrict);
  yield takeEvery(wardPending.type, getWard);
}

export default function* addressSaga() {
  console.log('address saga running');
  yield all([getCity(), addressWorker()]);
}
