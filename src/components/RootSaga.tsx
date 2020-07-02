import { all, fork } from "redux-saga/effects";
import { eventRegisterSaga } from "./EventRegistration/EventRegistrationSaga";
import { loginSaga } from "./Login/LoginSaga";
import { noticesListSaga } from "./NoticesList/NoticesListSaga";
import { eventsListSaga } from "./EventsList/EventsListSaga";
import { eventEditingSaga } from "./EventEditing/EventEditingSaga";
const RootSaga = function* () {
  yield all([
    fork(loginSaga),
    fork(noticesListSaga),
    fork(eventRegisterSaga),
    fork(eventsListSaga),
    fork(eventEditingSaga),
  ]);
};
export default RootSaga;
