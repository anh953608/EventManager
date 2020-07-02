import { SET_INDEX } from "./type";
const initData = {
  index_screen : 0,
};
const FooterReducer = (state = initData, action: any) => {
  switch (action.type) {
    case SET_INDEX:
      return {
        ...state,
        index_screen: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};
export default FooterReducer;
