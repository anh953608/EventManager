import { HANDLE_UPDATE_EVENT, UPDATE_EVENT_FAILURE, UPDATE_EVENT_SUCCESS } from "./type";
class EventRegistrationActions {
  handleUpdateEvent  = (data: any) => {
    return {
      type: HANDLE_UPDATE_EVENT, 
      data: data
    } 
  };
  updateEventSuccess  = (data: any) => {
    return {
      type: UPDATE_EVENT_FAILURE, 
      data: data
    } 
  };
  updateEventFailure  = (err: any) => {
    return {
      type: UPDATE_EVENT_SUCCESS, 
      error: err
    } 
  };
}
export default EventRegistrationActions;
