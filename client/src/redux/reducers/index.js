import { combineReducers } from "redux";
import committeeReducer from "./committeeReducer";
import userReducer from "./userReducer";
import pointsReducer from "./pointsReducer"

const rootRedcer = combineReducers({
  user: userReducer,
  committee: committeeReducer,
  point: pointsReducer
});

export default rootRedcer;
