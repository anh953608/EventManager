import {
  S00_CLOSE_STANDBY_SCREEN,
} from './type';
class MainAction {
  closeStandbyScreen = () => {
    return {
      type: S00_CLOSE_STANDBY_SCREEN,
    };
  };
}
export default MainAction;
