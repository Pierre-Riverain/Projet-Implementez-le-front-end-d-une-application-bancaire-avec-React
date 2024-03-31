import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { tokenSlice } from "./slices/TokenSlice";
import { userSlice } from "./slices/UserSlice";

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