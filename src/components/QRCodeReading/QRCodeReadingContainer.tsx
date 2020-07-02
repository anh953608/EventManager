import QRCodeReading from "./QRCodeReading";
import { connect } from "react-redux";
import EventEditingActions from "../EventEditing/EventEditingActions";

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
const QRCodeReadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QRCodeReading);
export default QRCodeReadingContainer;
