import { combineReducers, configureStore } from "@reduxjs/toolkit";

let state = {

};

export const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        
    })
})