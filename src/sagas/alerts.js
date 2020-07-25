import { fork, put, takeEvery } from 'redux-saga/effects';
import { REQUEST_ALERT } from 'actions/types';
import { showAlert } from 'actions/alerts';

function* failureAlert({ type, payload }) {
  const { response, name, message } = payload;

  if (/[45]\d\d/.test(message)) yield put(showAlert(response.data.message));
  else if (name && message) yield put(showAlert(`${name}: ${message}`));
}

function* watchErrors() {
  yield takeEvery(REQUEST_ALERT, failureAlert);
}

export default [fork(watchErrors)];
