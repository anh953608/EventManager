import { connect } from "react-redux";
import NoticesList from "./NoticesList";
import NoticesListActions from './NoticesListActions';

const noticesListActions = new NoticesListActions()
const mapStateToProps = (state: any) => {
  return {
    notices_reducer: state.NoticesListReducer
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetNotices: () => {
      dispatch(noticesListActions.getNotices())
    },
    onGetNoticeDetail: (data: any) => {
      dispatch(noticesListActions.getNoticeDetail(data))
    },
  };
};
const NoticesListContainer = connect(mapStateToProps, mapDispatchToProps)(NoticesList);
export default NoticesListContainer;
