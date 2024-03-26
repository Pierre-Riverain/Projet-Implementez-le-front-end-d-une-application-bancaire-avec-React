import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name: "token",
    initialState: {},
    reducers: {
        setToken: (currentState, action) => {
            const newState = {...currentState, token: action.payload};
            return newState;
        },
        removeToken: (currentState, action) => {
            const newState = {...currentState, token: ""};
            return newState;
        }
    }
});

export const {setToken, removeToken} = tokenSlice.actions;