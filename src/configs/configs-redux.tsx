import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "../components/RootReducer";
import RootSaga from "../components/RootSaga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);

export default store;
