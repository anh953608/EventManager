import { SET_HEADER_TITLE } from "./type";
const initData = {
  header_title: "",
};
const HeaderReducer = (state = initData, action: any) => {
  switch (action.type) {
    case SET_HEADER_TITLE:
      return {
        ...state,
        header_title: action.data.header_title,
      };
    default:
      return {
        ...state,
      };
  }
};
export default HeaderReducer;
