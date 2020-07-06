import {
  S00_CLOSE_STANDBY_SCREEN,
} from './type';
const initData = {
  flag_standby: true,
};
const MainReducer = (state = initData, action: any) => {
  switch (action.type) {
    case S00_CLOSE_STANDBY_SCREEN:
      return {
        ...state,
        flag_standby: false,
      };
    default:
      return state;
  }
};
export default MainReducer;
