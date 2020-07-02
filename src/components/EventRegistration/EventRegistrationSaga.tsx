import { call, put, takeLatest } from "redux-saga/effects";
import EventRegisterServices from "./EventRegistrationServices";
import { HANDLE_REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from "./type";
import VToast from "../../common/Toast/Toast";
import Message from "../../common/Message";

const services = new EventRegisterServices();
function* postEventRegisterAction(action: any) {
    try {
        const response = yield call(
            services.registerEvent,
            action.data
        );
        yield put({ type: REGISTER_SUCCESS, ...response });
        VToast.showToastSuccess(Message.FE00003);
    } catch (err) {
        yield put({ type: REGISTER_FAILURE, err });
        VToast.showToastError(Message.FE00004);
    }
}
export function* eventRegisterSaga() {
    yield takeLatest(HANDLE_REGISTER, postEventRegisterAction);
}
