import { createStore, combineReducers } from "redux";

import reducer from "./posts/post";
// reducer da mensagem
import reducerMessage from "./message";

let obj = {
    posts: reducer,
    message: reducerMessage
};

const rootReducer = combineReducers(obj);

export default createStore(rootReducer);