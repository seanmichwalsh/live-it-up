import {
  GET_ALL_USER,
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  USER_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../actions/actionTypes'

const initialState = {
  users: [],
  user: null,
  current: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        users: action.payload
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload
      }
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.uid === action.payload.uid ? action.payload : user
        )
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.uid !== action.payload)
      }
    case USER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_CURRENT:
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
