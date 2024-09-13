import { combineReducers } from "redux";

import globalSlice from "./slice";


const rootReducer = combineReducers({
    global: globalSlice
});

export default rootReducer