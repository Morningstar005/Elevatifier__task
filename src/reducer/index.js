import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "../slices/FetchNewsSlices"
const rootReducer = combineReducers({
    news:newsReducer
})

export default rootReducer