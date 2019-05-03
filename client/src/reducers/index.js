import { combineReducers } from "redux";
import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  REQUEST_ALL_USERS,
  RECEIVE_ALL_USERS,
  REQUEST_USER,
  RECEIVE_USER,
  INVALID_REQUEST
} from "../actions";

const selectedUser = (state = null, action) => {
  switch (action.type) {
    case DELETE_USER:
      return Object.assign({}, state, {
        ...state.filter(item => item.uid !== action.uid)
      });
    case EDIT_USER:
      /*return Object.assign({}, state, {
        changeProperty: action.value
      });*/
      Object.assign({}, state, {
        ...state.filter(item => item.uid !== action.uid)
      });
      return [
        ...state,
        {
          uid: action.uid,
          firstName: action.firstName,
          lastName: action.lastName,
          onCampus: action.onCampus,
          phoneNumber: action.phoneNumber,
          email: action.email,
          activeMember: action.activeMember,
          committees: action.committees,
          mainCommittee: action.mainCommittee
        }
      ];
    default:
      return state;
  }
};

const postUser = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          uid: action.uid,
          firstName: action.firstName,
          lastName: action.lastName,
          onCampus: action.onCampus,
          phoneNumber: action.phoneNumber,
          email: action.email,
          activeMember: action.activeMember,
          committees: action.committees,
          mainCommittee: action.mainCommittee
        }
      ];
    default:
      return state;
  }
};

const errorMessage = (state = {}, action) => {
  const { type, error } = action;

  if (type === INVALID_REQUEST) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
};

const rootReducer = combineReducers({
  selectedUser,
  postUser,
  errorMessage
});

export default rootReducer;
