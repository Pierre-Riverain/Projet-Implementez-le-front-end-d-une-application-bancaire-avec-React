import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        setUser: (currentState, action) => {
            const newState = { ...currentState,  ...action.payload};
            return newState;
        },
        updateUserName: (currentState, action) => {
            const newState = { ...currentState, userName: action.payload};
            return newState;
        },
        removeUser: () => {
            return {};
        }
    }
})

export const {setUser, updateUserName, removeUser} = userSlice.actions;