import Api from '../../configs/configs-api';
import PathApi from '../../utils/PathApi';

class NoticeListServices {
  noticeList() {
    return Api.get(PathApi.NOTICE).then((res: any) => {
      if (res.status == 200) {
        return res.data;
      }
    })
  }
}
export default NoticeListServices;
