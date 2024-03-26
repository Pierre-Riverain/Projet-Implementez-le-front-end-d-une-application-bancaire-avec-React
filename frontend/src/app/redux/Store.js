import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { tokenSlice } from "./Slices/TokenSlice";
import { userSlice } from "./Slices/UserSlice";

let state = {
    token: "",
    user: {}
}

export const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        token: tokenSlice.reducer,
        user: userSlice.reducer
    })
})