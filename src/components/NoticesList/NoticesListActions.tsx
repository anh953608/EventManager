import { GET_NOTICES, GET_NOTICES_FAIL, GET_NOTICES_SUCCESS, GET_NOTICE_DETAIL } from "./type";
class NoticesListActions {
  getNotices  = () => {
    return {
      type: GET_NOTICES,
    } 
  };
  getNoticesSuccess  = (data: any) => {
    return {
      type: GET_NOTICES_SUCCESS, 
      data: data
    } 
  };
  getNoticesFailure  = (err: any) => {
    return {
      type: GET_NOTICES_FAIL, 
      error: err
    } 
  };
  getNoticeDetail  = (data: any) => {
    return {
      type: GET_NOTICE_DETAIL, 
      data: data
    } 
  };
}
export default NoticesListActions;
