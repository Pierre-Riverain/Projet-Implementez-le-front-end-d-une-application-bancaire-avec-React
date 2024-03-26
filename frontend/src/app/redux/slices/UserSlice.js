import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        setUser: (currentState, action) => {
            const newState = {...currentState, user: action.payload};
            return newState;
        },
        removeUser: (currentState, action) => {
            const newState = {...currentState, user: {}};
            return newState;
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;