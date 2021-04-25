import data from "../data";
import { v4 as uuidv4 } from "uuid";

const initBookList = data();

const bookListReducer = (state = initBookList, action) => {
  switch (action.type) {
    case "DELETE_BOOK":
      return state.filter((book) => book.id !== action.id);
      break;
    case "MODIFY_BOOK":
      return state.map((book) => {
        if (book.id !== action.book.id) {
          return book;
        }
        return {
          ...book,
          ...action.book,
        };
      });
      break;
    case "ADD_BOOK":
      const newBook = {
        id: uuidv4(),
        ...action.book,
      };
      return [...state, newBook];
    default:
      return state;
  }
};

export default bookListReducer;
