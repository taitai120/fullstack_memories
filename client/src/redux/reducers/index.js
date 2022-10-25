import { combineReducers } from "redux";

import postReducer from "./postReducer.js";

const rootReducer = combineReducers({
    postReducer,
});

export default rootReducer;
