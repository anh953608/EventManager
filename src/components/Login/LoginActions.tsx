import {
  S01_HANDLE_LOGIN,
  S01_LOGIN_SUCCESS,
  S01_LOGIN_FAILURE,
  S01_LOGOUT,
} from './type';
class LoginAction {
  handleLogin = (data: any) => {
    return {
      type: S01_HANDLE_LOGIN,
      ...data,
    };
  };
  loginSuccess = (data: any) => {
    return {
      type: S01_LOGIN_SUCCESS,
      ...data,
    };
  };
  loginFailure = (err: any) => {
    return {
      type: S01_LOGIN_FAILURE,
      error: err,
    };
  };
  logout = () => {
    return {
      type: S01_LOGOUT,
    };
  };
}
export default LoginAction;
