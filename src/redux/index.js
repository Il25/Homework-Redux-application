import { combineReducers, createStore } from "redux";
import usersReducer from "./users";

const rootReducer = combineReducers({
    users: usersReducer,
});

const store = createStore(rootReducer);

export default store;