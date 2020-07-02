import Api from '../../configs/configs-api';
import PathApi from '../../utils/PathApi';

class NoticesDetailsServices {
    noticeDetail(data: any) {
        return Api.get(PathApi.NOTICE.concat("/").concat(data)).then((res: any) => {
            if (res.status == 200) {
                return res.data;
            }
        })
    }
}
export default NoticesDetailsServices;
