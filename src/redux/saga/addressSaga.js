import {all, takeEvery, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {cityPending, citySuccess} from '../slice/addressSlice';

function* getCity() {
  const {data} = yield call(
    axios.get,
    'https://thongtindoanhnghiep.co/api/city',
  );
  yield put({type: citySuccess.type, payload: {city: data.LtsItem}});
}

function* addressWorker() {
  yield takeEvery(cityPending.type, getCity);
}
export default function* addressSaga() {
  console.log('address saga running');
  yield all([addressWorker()]);
}
