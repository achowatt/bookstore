import addingNewReducer from "../reducers/addingNew";
import modifyingReducer from "../reducers/modifying";
import updatedBookListReducer from "../reducers/updatedBookList";
import currentBookReducer from "../reducers/currentBook";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  addingNew: addingNewReducer,
  modifying: modifyingReducer,
  updatedBookList: updatedBookListReducer,
  currentBook: currentBookReducer,
});

export default allReducers;
