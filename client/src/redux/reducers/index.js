import { combineReducers } from 'redux'
import committeeReducer from './committeeReducer'
import userReducer from './userReducer'
import pointsReducer from './pointsReducer'
import eventReducer from './eventsReducer'

const rootReducer = combineReducers({
  user: userReducer,
  committee: committeeReducer,
  points: pointsReducer,
  event: eventReducer
})

export default rootReducer
