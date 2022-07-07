import { combineReducers } from "redux";
import utils from "../reducers/utilsSlice";
import user from "../reducers/userSlice";

export default combineReducers({
  utils,
  user,
});
