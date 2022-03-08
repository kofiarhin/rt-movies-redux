import { combineReducers } from "redux";
import moviesReducer from "./movies.reducers";
import navigationReducer from "./navigation.reducer";
const rootReducer = combineReducers({
  moviesReducer,
  navigationReducer,
});

export default rootReducer;
