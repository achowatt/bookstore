import data from "../data";
import { v4 as uuidv4 } from "uuid";

const initBookList = data();

const updatedBookListReducer = (state = initBookList, action) => {
  switch (action.type) {
    case "DELETE_BOOK":
      const updatedBookList = state.filter((book) => book.id !== action.id);
      return updatedBookList;

    case "MODIFY_BOOK/ADD_BOOK":
      const currentList = action.currentBookList;
      const bookIndex = currentList.findIndex(
        (book) => book.id === currentList.id
      );
      if (bookIndex !== -1) {
        return {
          ...state[bookIndex],
          id: action.id,
          name: action.inputName,
          price: action.inputPrice,
          category: action.categoryOption,
          description: action.inputDescription,
        };
      } else {
        const newBook = {
          id: uuidv4(),
          name: inputName,
          price: inputPrice,
          category: categoryOption,
          description: inputDescription,
        };
        return {
          ...state,
          newBook,
        };
      }
      break;
    default:
      return initBookList;
  }
};

export default updatedBookListReducer;
