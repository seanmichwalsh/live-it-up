import {
  POINTS_ERROR,
  GET_ALL_POINTS,
  GET_POINTS,
  ADD_POINTS,
  UPDATE_POINTS,
  DELETE_POINTS,
  SET_CURRENT_POINTS,
  CLEAR_CURRENT,
  GET_POINTS_REPORT_FOR_USER,
  GET_USER_POINTS
} from '../actions/actionTypes'

const initialState = {
  points: {},
  point: null,
  current: null,
  error: null,
  pointsReport: null,
  userPointDetails: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POINTS:
      return {
        ...state,
        points: action.payload
      }
    case GET_USER_POINTS:
      return {
        ...state,
        userPointDetails: action.payload
      }
    case GET_POINTS:
      return {
        ...state,
        point: action.payload
      }
    case GET_POINTS_REPORT_FOR_USER:
      return {
        ...state,
        pointsReport: action.payload
      }
    case ADD_POINTS:
      return {
        ...state,
        points: [action.payload]
      }
    case UPDATE_POINTS:
      return {
        ...state,
        points: state.points.map(point =>
          point.id === action.payload.id ? action.payload : point
        )
      }
    case DELETE_POINTS:
      return {
        ...state,
        users: state.points.filter(
          point => point.id !== action.payload
        )
      }
    case POINTS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SET_CURRENT_POINTS:
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
