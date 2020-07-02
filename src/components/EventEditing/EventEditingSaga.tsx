import {call, put, takeLatest} from 'redux-saga/effects';
import {
  HANDLE_UPDATE_EVENT,
  UPDATE_EVENT_FAILURE,
  UPDATE_EVENT_SUCCESS,
} from './type';
import EventEditingServices from './EventEditingServices';
import VToast from '../../common/Toast/Toast';
import Message from '../../common/Message';

const services = new EventEditingServices();
function* putEventAction(actions: any) {
  try {
    const response = yield call(services.updateEvent, actions.data);
    yield put({type: UPDATE_EVENT_SUCCESS, ...response});
    VToast.showToastSuccess(Message.FE00001);
  } catch (err) {
    yield put({type: UPDATE_EVENT_FAILURE, err});
    VToast.showToastSuccess(Message.FE00002);
  }
}
export function* eventEditingSaga() {
  yield takeLatest(HANDLE_UPDATE_EVENT, putEventAction);
}
