import { combineReducers } from 'redux';
import LoginReducer from './Login/LoginReducer';
import MainReducer from '../common/Main/MainReducer';
import ESModalReducer from '../common/ESModal/ESModalReducer';
import OverlayReducer from '../common/Overlay/OverlayReducer';
import FooterReducer from '../common/Footer/FooterReducer';
import HeaderReducer from '../common/Header/HeaderReducer';
import EventRegistrationReducer from './EventRegistration/EventRegistrationReducer';
import EventEditingReducer from './EventEditing/EventEditingReducer';

import EventsListReducer from './EventsList/EventsListReducer';
import NoticesListReducer from './NoticesList/NoticesListReducer';
const RootReducer = combineReducers({
    MainReducer,
    LoginReducer,
    OverlayReducer,
    ESModalReducer,
    HeaderReducer,
    FooterReducer,
    EventRegistrationReducer,
    NoticesListReducer,
    EventsListReducer,
    EventEditingReducer
});
export default RootReducer;