import Api from "../../configs/configs-api";
import PathApi from "../../utils/PathApi";

class LoginServices {
    getEventsList() {
        return Api.get(PathApi.EVENT).then((res: any) => {
            return res.data;
        });
    }
    getEventsDetail(param: any) {
        return Api.get(PathApi.EVENT.concat("/" + param)).then((res: any) => {
            return res.data;
        });
    }
}

export default LoginServices;
