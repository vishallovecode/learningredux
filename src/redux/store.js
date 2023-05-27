import { createStore } from "redux";
import { loginReducer } from "./reducer";
// creating a store

const store = createStore(loginReducer);

export default store;
