import Api from '../../configs/configs-api';
import PathApi from '../../utils/PathApi';

class EventRegisterServices {
  registerEvent(user_info: any) {
    return Api.post(PathApi.EVENT, user_info).then((res: any) => {
        if(res.status == 200) {
            return res.data[0];
        }
    })
  }
}
export default EventRegisterServices;
