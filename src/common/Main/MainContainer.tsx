import Main from "./Main";
import { connect } from "react-redux";
import LoginAction from "../../components/Login/LoginActions";

const loginAction = new LoginAction();
const mapStateToProps = (state: any) => {
  return {
    data: state.LoginReducer,
    header: state.HeaderReducer
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoginSuccess: (data: any) => {
      dispatch(loginAction.loginSuccess(data));
    },
    onCloseStandbyScreen: () => {
      dispatch(loginAction.closeStandbyScreen());
    },
  };
};
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default MainContainer;
