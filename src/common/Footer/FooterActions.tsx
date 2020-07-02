import { SET_INDEX } from "./type";
class FooterActions {
  selectScreen = (data: any) => {
    return {
      type: SET_INDEX,
      data,
    };
  };
}
export default FooterActions;
