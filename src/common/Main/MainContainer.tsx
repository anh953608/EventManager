import Main from "./Main";
import { connect } from "react-redux";
import LoginAction from "../../components/Login/LoginActions";
import MainAction from "./MainActions";

const loginAction = new LoginAction();
const mainAction = new MainAction();
const mapStateToProps = (state: any) => {
  return {
    data_login: state.LoginReducer,
    data_header: state.HeaderReducer,
    data_main: state.MainReducer
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoginSuccess: (data: any) => {
      dispatch(loginAction.loginSuccess(data));
    },
    onCloseStandbyScreen: () => {
      dispatch(mainAction.closeStandbyScreen());
    },
  };
};
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
