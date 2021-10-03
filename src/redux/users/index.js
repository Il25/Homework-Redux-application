import { actionsTypes } from "./actionsTypes";

const initialState = {
  list: [],
  count: 0,
  editUser: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_USER:
      return {
        ...state,
        list: [...state.list, action.payload],
        count: state.count + 1,
      };
    case actionsTypes.EDIT_USER:
      return {
        ...state,
        editUser: state.list.find(user => user.id === action.payload.id),
        list: [...state.list].filter(user => user.id != action.payload),
      };
    case actionsTypes.DELETE_USER:
      return {
        ...state,
        list: [...state.list].filter(user => user.id != action.payload),
        count: state.count - 1,
      };  
    default:
      return state;
  }
};

export default usersReducer;