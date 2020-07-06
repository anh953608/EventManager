import {
  S01_HANDLE_LOGIN,
  S01_LOGIN_SUCCESS,
  S01_LOGIN_FAILURE,
  S01_SET_TOKEN,
  S01_LOGOUT,
} from './type';
const initData = {
  access_token: '',
  username: '',
  name: '',
  token_type: 'bearer',
  is_login: false,
  is_loading: false,
  is_waiting: true,
  error: false,
};
const LoginReducer = (state = initData, action: any) => {
  switch (action.type) {
    case S01_HANDLE_LOGIN:
      return {
        ...state,
        is_loading: true,
        error: false,
      };
    case S01_SET_TOKEN:
      return {
        ...state,
        access_token: action.access_token,
        token_type: action.token_type,
        is_login: false,
        is_loading: true,
      };
    case S01_LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username,
        access_token: action.access_token,
        name: action.name,
        is_login: true,
        is_loading: false,
        error: false,
      };
    case S01_LOGIN_FAILURE:
      return {
        ...state,
        is_loading: false,
        error: true,
      };
    case S01_LOGOUT:
      return {
        ...state,
        is_login: false,
        access_token: '',
      };
    default:
      return state;
  }
};
export default LoginReducer;
