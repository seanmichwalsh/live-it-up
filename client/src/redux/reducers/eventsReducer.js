import {
    GET_ALL_EVENTS,
    GET_EVENT,
    ADD_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    EVENT_ERROR
  } from '../actions/actionTypes';
  
  const initialState = {
    events: [],
    event: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_EVENTS:
        return {
          ...state,
          events: action.payload
        };
      case GET_EVENT:
        return {
          ...state,
          event: action.payload
        };
      case ADD_EVENT:
        return {
          ...state,
          events: [...state.events, action.payload]
        };
      case UPDATE_EVENT:
        return {
          ...state,
          events: state.events.map(event =>
            event.uid === action.payload._id ? action.payload : event
          )
        };
      case DELETE_EVENT:
        return {
          ...state,
          events: state.events.filter(event => event._id !== action.payload)
        };
      case EVENT_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  