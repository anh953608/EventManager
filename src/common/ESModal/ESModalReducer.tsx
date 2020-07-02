import TypeAction from "./type";
const initData = {
  is_show: false,
  is_error: false,
  message: "",
};
const ESModalReducer = (state = initData, action: any) => {
  switch (action.type) {
    case TypeAction.OPEN_MODAL_SUCCESS:
      return {
        ...state,
        is_show: true,
        is_error: false,
        message: action.message,
      };
    case TypeAction.CLOSE_MODAL_SUCCESS:
      return {
        ...state,
        is_show: true,
        is_error: false,
        message: action.message,
      };
    case TypeAction.OPEN_MODAL_ERROR:
      return {
        ...state,
        is_show: true,
        is_error: true,
        message: action.message,
      };
    case TypeAction.CLOSE_MODAL_ERROR:
      return {
        ...state,
        is_show: true,
        is_error: true,
        message: action.message,
      };
    default:
      return state;
  }
};
export default ESModalReducer;
