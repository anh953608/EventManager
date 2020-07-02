import { HANDLE_REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS } from "./type";
class EventRegistrationActions {
  handleRegister  = (data: any) => {
    return {
      type: HANDLE_REGISTER, 
      data: data
    } 
  };
  registerSuccess  = (data: any) => {
    return {
      type: REGISTER_SUCCESS, 
      data: data
    } 
  };
  registerFailure  = (err: any) => {
    return {
      type: REGISTER_FAILURE, 
      error: err
    } 
  };
}
export default EventRegistrationActions;
