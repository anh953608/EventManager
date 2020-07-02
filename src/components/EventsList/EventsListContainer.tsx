import EventsList from "./EventsList";
import EventsListActions from "./EventsListActions";
import { connect } from "react-redux";

const eventsListActions = new EventsListActions();
const mapStateToProps = (state: any) => {
  return {
    event_reducer: state.EventsListReducer,
    search_reducer: state.EventsListReducer.search_obj
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetDataInit: () => {
      dispatch(eventsListActions.getDataInit());
    },
  };
};
const EventEditingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsList);
export default EventEditingContainer;
