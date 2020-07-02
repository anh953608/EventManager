import {call, put, takeLatest} from 'redux-saga/effects';
import {EVL_GET_EVENTS_LIST, EVL_LOAD_DATA, EVL_EVENTS_LIST_ERR} from './type';

import EventsListServices from './EventsListServices';
const eventsListServices = new EventsListServices();

function* getEventsList() {
  try {
    const data = yield call(
      eventsListServices.getEventsList,
    );
    yield put({type: EVL_GET_EVENTS_LIST, data});
  } catch (err) {
    yield put({type: EVL_EVENTS_LIST_ERR, err});
  }
}
export function* eventsListSaga() {
  yield takeLatest(EVL_LOAD_DATA, getEventsList);
}
