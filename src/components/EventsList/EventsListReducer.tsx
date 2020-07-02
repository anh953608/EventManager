import {
  EVL_GET_EVENTS_LIST,
  EVL_GET_EVENT_DETAIL,
  EVL_LOAD_DATA,
  EVL_EVENTS_LIST_ERR,
} from './type';
const initData = {
  events: [],
  event_detail: {},
  search_obj: {
    venue_name: '',
    address: '',
    time: new Date(),
    is_searched: true,
  },
  is_loading: false,
  error: '',
};
const LoginReducer = (state = initData, action: any) => {
  switch (action.type) {
    case EVL_LOAD_DATA:
      return {
        ...state,
        is_loading: false,
      };
    case EVL_GET_EVENTS_LIST:
      return {
        ...state,
        events: action.data,
        is_loading: false,
      };
    case EVL_EVENTS_LIST_ERR:
      return {
        ...state,
        is_loading: false,
        error: 'Error!',
      };
    case EVL_GET_EVENT_DETAIL:
      return {
        ...state,
        event_detail: action.data,
        is_loading: false,
      };
    default:
      return state;
  }
};
export default LoginReducer;
