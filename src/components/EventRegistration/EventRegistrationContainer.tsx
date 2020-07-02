import { connect } from "react-redux";
import EventRegistration from "./EventRegistration";
import EventRegistrationActions from "./EventRegistrationActions";

const actions = new EventRegistrationActions();
const mapStateToProps = (state: any) => {
  return { mp_state: state.EventRegistrationReducer };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onHandleRegister: (data: any) => {
      dispatch(actions.handleRegister(data))
    },
  };
};
const EventRegistrationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventRegistration);
export default EventRegistrationContainer;
