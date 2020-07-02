import { SET_HEADER_TITLE } from "./type";
class HeaderAction {
  setHeaderTitle  = (data: any) => {
    return {
      type: SET_HEADER_TITLE, 
      data: data
    } 
  };
}
export default HeaderAction;
