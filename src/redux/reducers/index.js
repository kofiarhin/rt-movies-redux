import { combineReducers } from "redux";
import moviesReducer from "./movies.reducers";

const rootReducer = combineReducers({
  moviesReducer,
});

export default rootReducer;
