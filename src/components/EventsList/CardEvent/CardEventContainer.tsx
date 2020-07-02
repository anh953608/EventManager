import CardEvent from './CardEvent';
import {connect} from 'react-redux';
import EventsListActions from '../EventsListActions';

const eventsListActions = new EventsListActions();
const mapStateToProps = (state: any) => {
  return {};
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onSetDataDetails: (data: any) => {
      dispatch(eventsListActions.getEventDetail(data));
    },
  };
};
const CardEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardEvent);
export default CardEventContainer;
