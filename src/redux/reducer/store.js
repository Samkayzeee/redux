import { createStore } from "redux";
import handleUsers from "./handleUsers";

const store = createStore(handleUsers);

export default store;