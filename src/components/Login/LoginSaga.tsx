import { call, put, takeLatest } from "redux-saga/effects";
import { HANDLE_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, SET_TOKEN } from "./type";

import LoginServices from "./LoginServices";
import AsyncStorage from '@react-native-community/async-storage'
const loginServices = new LoginServices();

function* postLoginAction(data: any) {
  try {
    console.log(data);
    const response = yield call(
      loginServices.login,
      data.username,
      data.password
    );
    if(response){
      yield put({ type: SET_TOKEN, ...response });

      // Get infor user
      yield put({ type: LOGIN_SUCCESS, ...response });
      const data = {
        username: response.username,
        access_token: response.access_token,
        name: response.name,
      };
      yield AsyncStorage.setItem('session', JSON.stringify(data));
    } else {
      yield put({ type: LOGIN_FAILURE});
    }
  } catch (err) {
    console.log(err);
    yield put({ type: LOGIN_FAILURE, err });
  }
}
export function* loginSaga() {
  yield takeLatest(HANDLE_LOGIN, postLoginAction);
}
