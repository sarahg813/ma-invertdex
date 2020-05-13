import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import studiosReducer from "./studiosReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  studios: studiosReducer,
});
