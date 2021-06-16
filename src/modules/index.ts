import { combineReducers } from "redux";
import postReducer from "./post";

const rootReducer = combineReducers(postReducer);
export default rootReducer;
