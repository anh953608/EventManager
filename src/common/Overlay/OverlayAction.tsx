import TypeAction from "./type";
class OverlayAction {
  handleOpenOverlay = () => {
    return {
      type: TypeAction.OPEN_OVERLAY_ERROR,
    };
  };
  handleCloseOverlay = () => {
    return {
      type: TypeAction.CLOSE_OVERLAY_ERROR,
    };
  };
}
export default OverlayAction;
