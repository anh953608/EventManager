import {EVL_GET_EVENTS_LIST, EVL_GET_EVENT_DETAIL, EVL_LOAD_DATA} from './type';
class EventsListActions {
  getDataInit = () => {
    return {
      type: EVL_LOAD_DATA,
    };
  };
  getEventsList = (data: any) => {
    return {
      type: EVL_GET_EVENTS_LIST,
      data: data,
    };
  };
  getEventDetail = (data: any) => {
    return {
      type: EVL_GET_EVENT_DETAIL,
      data: data,
    };
  };
}
export default EventsListActions;
