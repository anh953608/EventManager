import { connect } from "react-redux";
import NoticesDetails from "./NoticesDetails";

const mapStateToProps = (state: any) => {
  return {
    notice: state.NoticesListReducer.notice
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
  };
};
const NoticesDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(NoticesDetails);
export default NoticesDetailsContainer;
