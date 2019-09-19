import { combineReducers } from "redux";
import committeeReducer from "./committeeReducer";
import userReducer from "./userReducer";

const rootRedcer = combineReducers({
  user: userReducer,
  committee: committeeReducer
});

export default rootRedcer;
