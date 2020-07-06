import {call, put, takeLatest} from 'redux-saga/effects';
import {
  S01_HANDLE_LOGIN,
  S01_LOGIN_SUCCESS,
  S01_LOGIN_FAILURE,
  S01_SET_TOKEN,
} from './type';

import LoginServices from './LoginServices';
import AsyncStorage from '@react-native-community/async-storage';
import utils from '../../utils';
const loginServices = new LoginServices();

function* postLoginAction(data: any) {
  try {
    const response = yield call(
      loginServices.login,
      data.username,
      data.password,
    );
    if (response) {
      yield put({type: S01_SET_TOKEN, ...response});

      // Get infor user
      yield put({type: S01_LOGIN_SUCCESS, ...response});
      const data = {
        username: response.username,
        access_token: response.access_token,
        name: response.name,
      };
      yield AsyncStorage.setItem(utils.Constants.SESSION, JSON.stringify(data));
    } else {
      yield put({type: S01_LOGIN_FAILURE});
    }
  } catch (err) {
    console.log(err);
    yield put({type: S01_LOGIN_FAILURE, err});
  }
}
export function* loginSaga() {
  yield takeLatest(S01_HANDLE_LOGIN, postLoginAction);
}
