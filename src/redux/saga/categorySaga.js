import axios from 'axios';
import {call, put, all} from 'redux-saga/effects';
import {categoryPending, categorySuccess} from '../slice/categorySlice';
import {apiUrl} from '../constants';

function* getCategories() {
  yield put({type: categoryPending.type});
  const {data} = yield call(axios.get, `${apiUrl}/category/all`);
  yield put({
    type: categorySuccess.type,
    payload: {categories: data.categories},
  });
}
// function* workerCategory() {}

export default function* CategorySaga() {
  console.log('category saga');
  yield all([getCategories()]);
}
