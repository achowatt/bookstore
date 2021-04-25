import bookListReducer from "../reducers/bookList";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  bookList: bookListReducer,
});

export default allReducers;
