const init = {
  id: "",
  name: "",
  price: "",
  category: "",
  description: "",
};

const currentBookReducer = (state = { init }, action) => {
  switch (action.type) {
    case "ACTIVE_BOOK":
      return {
        ...state,
        id: action.id,
        name: action.name,
        price: action.price,
        category: action.category,
        description: action.description,
      };
      break;
    default:
      return state;
  }
};

export default currentBookReducer;
