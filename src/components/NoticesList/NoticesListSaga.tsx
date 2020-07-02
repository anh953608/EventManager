import { call, put, takeLatest } from "redux-saga/effects";
import NoticesListServices from "./NoticesListServices";
import { GET_NOTICES, GET_NOTICES_FAIL, GET_NOTICES_SUCCESS } from "./type";

const noticesListServices = new NoticesListServices();

function* noticesInit(data: any) {
    try {
        const response = yield call(
            noticesListServices.noticeList,
        );
        yield put({ type: GET_NOTICES_SUCCESS, response });
    } catch (err) {
        yield put({ type: GET_NOTICES_FAIL, err });
    }
}
export function* noticesListSaga() {
    yield takeLatest(GET_NOTICES, noticesInit);
}
