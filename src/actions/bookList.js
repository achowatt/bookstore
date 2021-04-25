export const deleteAction = (id) => {
  return {
    type: "DELETE_BOOK",
    id,
  };
};

export const modifyAction = (book) => {
  return {
    type: "MODIFY_BOOK",
    book,
  };
};

export const addNewAction = (book) => {
  return {
    type: "ADD_BOOK",
    book,
  };
};
