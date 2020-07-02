import Api from '../../configs/configs-api';
import PathApi from '../../utils/PathApi';

class EventEditingServices {
  updateEvent(data: any) {
    return Api.put(PathApi.EVENT.concat('/' + data['id']), data).then((res: any) => {
        if(res.status == 200) {
            return res.data[0];
        }
    })
  }
}
export default EventEditingServices;
