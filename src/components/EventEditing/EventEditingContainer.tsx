import { connect } from "react-redux";
import EventEditing from "./EventEditing";
import EventEditingActions from "./EventEditingActions";

const actions = new EventEditingActions();
const mapStateToProps = (state: any) => {
  return {
    event_detail: state.EventsListReducer.event_detail,
    event_state: state.EventEditingReducer
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onHandleUpdateEvent: (data: any) => {
      dispatch(actions.handleUpdateEvent(data))
    },
  };
};
const EventEditingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventEditing);
export default EventEditingContainer;
