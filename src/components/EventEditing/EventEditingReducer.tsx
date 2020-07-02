import { HANDLE_UPDATE_EVENT, UPDATE_EVENT_FAILURE, UPDATE_EVENT_SUCCESS } from "./type";
const initData = {
  is_loading: false,
  is_success: false,
  error: false
};
const EventEditingReducer = (state = initData, action: any) => {
  switch (action.type) {
    case HANDLE_UPDATE_EVENT:
      return {
        ...state,
        is_success: false,
        is_loading: true,
      };
    case UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        is_success: true,
        is_loading: false,
      };
    case UPDATE_EVENT_FAILURE:
      return {
        ...state,
        is_success: false,
        is_loading: false,
        error: true,
      };
    default:
      return state;
  }
};
export default EventEditingReducer;
