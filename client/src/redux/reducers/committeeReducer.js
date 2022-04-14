import {
  COMMITTEE_ERROR,
  GET_ALL_COMMITTEE,
  GET_COMMITTEE,
  ADD_COMMITTEE,
  UPDATE_COMMITTEE,
  DELETE_COMMITTEE,
  SET_CURRENT_COMMITTEE,
  CLEAR_CURRENT
} from '../actions/actionTypes'

const initialState = {
  committees: [],
  committee: null,
  current: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COMMITTEE:
      return {
        ...state,
        committees: action.payload
      }
    case GET_COMMITTEE:
      return {
        ...state,
        committee: action.payload
      }
    case ADD_COMMITTEE:
      return {
        ...state,
        committees: [...state.committees, action.payload]
      }
    case UPDATE_COMMITTEE:
      return {
        ...state,
        committees: state.committees.map(committee =>
          committee.id === action.payload.id ? action.payload : committee
        )
      }
    case DELETE_COMMITTEE:
      return {
        ...state,
        users: state.committees.filter(
          committee => committee.id !== action.payload
        )
      }
    case COMMITTEE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_CURRENT_COMMITTEE:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    default:
      return state
  }
}
