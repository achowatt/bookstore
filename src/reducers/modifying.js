const modifyingReducer = (state = false, action) => {
  switch (action.type) {
    case "MODIFYING":
      return true;
    case "MODIFYING_CLOSED":
      return false;
    default:
      return state;
  }
};

export default modifyingReducer;
