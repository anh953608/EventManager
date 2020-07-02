import { connect } from "react-redux";
import OverlayComponent from "./Overlay";
import OverlayAction from "./OverlayAction";

const overlayAction = new OverlayAction();
const mapStateToProps = (state: any) => {
  return {
    mp_state: state.OverlayReducer,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onHandleOpenOverlay: () => {
      dispatch(overlayAction.handleOpenOverlay());
    },
    onHandleCloseOverlay: () => {},
  };
};
const OverlayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OverlayComponent);

export default OverlayContainer;
