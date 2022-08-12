import { combineReducers } from "redux";
import authReducer from "./reducer";
import locationReducer from "./location.reducer";

export default combineReducers({
  auth: authReducer,
  location: locationReducer,
});
