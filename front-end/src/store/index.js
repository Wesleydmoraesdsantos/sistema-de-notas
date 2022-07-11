import { createStore, combineReducers } from "redux";

import reducer from "./posts/post";

let obj = {
    posts: reducer,
};

const rootReducer = combineReducers(obj);

export default createStore(rootReducer);