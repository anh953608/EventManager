import { HANDLE_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, CLOSE_STANDBY_SCREEN, LOGOUT } from "./type";
class LoginAction {
  handleLogin = (data: any) => {
    return {
      type: HANDLE_LOGIN,
      ...data,
    };
  };
  loginSuccess = (data: any) => {
    return {
      type: LOGIN_SUCCESS,
      ...data,
    };
  };
  loginFailure = (err: any) => {
    return {
      type: LOGIN_FAILURE,
      error: err,
    };
  };
  logout = () => {
    return {
      type: LOGOUT,
    };
  };
  closeStandbyScreen = () => {
    return {
      type: CLOSE_STANDBY_SCREEN,
    };
  };
}
export default LoginAction;
