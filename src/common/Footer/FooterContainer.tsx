import Footer from "./Footer";
import { connect } from "react-redux";
import FooterActions from "./FooterActions";

const footerActions = new FooterActions();
const mapStateToProps = (state: any) => {
  return {
    footer:  state.FooterReducer
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onSelectScreen: (param: any) => {
      dispatch(footerActions.selectScreen(param));
    },
  };
};
const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default FooterContainer;
