const addingNewReducer = (state = false, action) => {
  switch (action.type) {
    case "ADDING_NEW":
      return true;
    case "ADDING_NEW_CLOSED":
      return false;
    default:
      return state;
  }
};

export default addingNewReducer;
