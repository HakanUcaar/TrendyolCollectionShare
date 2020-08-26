import { createStore } from "redux";
import rootReducer from "./ReduxReducer";

const store = createStore(rootReducer);

export default store;