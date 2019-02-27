import { fork } from 'redux-saga/effects';
import countSaga from '../counter/saga';
import listSaga from '../skywalkers/saga';

export default function* rootSaga() {
  yield fork(countSaga);
  yield fork(listSaga);
}
