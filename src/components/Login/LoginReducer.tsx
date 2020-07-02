import {
  HANDLE_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLOSE_STANDBY_SCREEN,
  SET_TOKEN,
  LOGOUT,
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
    case HANDLE_LOGIN:
      return {
        ...state,
        is_loading: true,
        error: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        access_token: action.access_token,
        token_type: action.token_type,
        is_login: false,
        is_loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username,
        access_token: action.access_token,
        name: action.name,
        is_login: true,
        is_loading: false,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        is_loading: false,
        error: true,
      };
    case LOGOUT:
      return {
        ...state,
        is_login: false,
        access_token: '',
      };
    case CLOSE_STANDBY_SCREEN:
      return {
        ...state,
        is_waiting: false,
      };
    default:
      return state;
  }
};
export default LoginReducer;
