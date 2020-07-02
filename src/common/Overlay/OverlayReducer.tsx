import TypeAction from "./type";
const initData = {
  is_show: false,
};
const OverlayReducer = (state = initData, action: any) => {
    switch (action.type) {
        case TypeAction.OPEN_OVERLAY_ERROR:
          return {
            ...state,
            is_show: true,
          };
        case TypeAction.CLOSE_OVERLAY_ERROR:
          return {
            ...state,
            is_show: false,
          };
        default:
          return state;
      }
}
export default OverlayReducer;