import { HANDLE_REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from "./type";
const initData = {
  is_success: false,
  is_loading: false,
  error: "",
};
const EventRegistrationReducer = (state = initData, action: any) => {
  switch (action.type) {
    case HANDLE_REGISTER:
      return {
        ...state,
        is_success: false,
        is_loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        is_success: true,
        is_loading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        is_success: false,
        is_loading: false,
        error: "Event register fail!",
      };
    default:
      return state;
  }
};
export default EventRegistrationReducer;
