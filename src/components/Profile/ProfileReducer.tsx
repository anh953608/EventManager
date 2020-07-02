import { REDIRECT_CHANGE_PASS, LOGOUT_SUCCESS, LOGOUT_FAIL, LOGOUT } from "./type";
const initData = {
  is_loading: false,
  data: [],
};
const ProfileReducer = (state = initData, action: any) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        is_loading: true,
        is_login: false
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        data_notices: action.response,
        is_loading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        is_loading: false,
        error: "Notices fail!"
      };
      case REDIRECT_CHANGE_PASS:
      return {
        ...state,
        notice: action,
      };
    default:
      return state;
  }
};
export default ProfileReducer;
