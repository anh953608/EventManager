import { connect } from "react-redux";
import ESModalComponent from "./ESModal";

const mapStateToProps = (state: any) => {
  return {
    mp_state: state.ESModalReducer
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onHandleOpenEModal: (data: any) => {
    },
    onHandleCloseEModal: (data: any) => {
    },
    onHandleOpenSModal: (data: any) => {
    },
    onHandleCloseSModal: (data: any) => {
    },
  };
};
const ESModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ESModalComponent);
export default ESModalContainer;
