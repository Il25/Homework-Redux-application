import { actionsTypes } from "./actionsTypes";

const initialState = {
  list: [],
  count: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_USER:
      return {
        ...state,
        list: [...state.list, action.payload],
        count: state.count + 1
      };
      case "RESET":
        return initialState
    default:
      return state;
  }
};

export default usersReducer;