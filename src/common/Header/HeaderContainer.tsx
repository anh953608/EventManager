import Header from "./Header";
import { connect } from "react-redux";
import HeaderAction from "./HeaderActions";

const headerAction = new HeaderAction();
const mapStateToProps = (state: any) => {
  return {
    headerStore: state.LoginReducer
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onSetHeaderTitle: (data: any) => {
      dispatch(headerAction.setHeaderTitle(data));
    },
  };
};
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
