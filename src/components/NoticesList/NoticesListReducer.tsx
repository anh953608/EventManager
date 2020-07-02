import { GET_NOTICES, GET_NOTICES_FAIL, GET_NOTICES_SUCCESS, GET_NOTICE_DETAIL } from "./type";
const initData = {
  is_loading: true,
  data_notices: [],
  notice: {},
  error: '',
};
const NoticesListReducer = (state = initData, action: any) => {
  switch (action.type) {
    case GET_NOTICES:
      return {
        ...state,
        is_loading: true,
      };
    case GET_NOTICES_SUCCESS:
      return {
        ...state,
        data_notices: action.response,
        is_loading: false,
      };
    case GET_NOTICES_FAIL:
      return {
        ...state,
        is_loading: false,
        error: "Notices fail!"
      };
    case GET_NOTICE_DETAIL:
      return {
        ...state,
        notice: action.data,
      };
    default:
      return state;
  }
};
export default NoticesListReducer;