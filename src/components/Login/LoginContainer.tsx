import LoginAction from "./LoginActions";
import Login from "./Login";
import { connect } from "react-redux";

const loginAction = new LoginAction();
const mapStateToProps = (state: any) => {
  return {
    data_login: state.LoginReducer,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onHandleLogin: (data: any) => {
      dispatch(loginAction.handleLogin(data));
    },
  };
};
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;
