import { createSlice } from "@reduxjs/toolkit";
const users = []

const userSlice = createSlice({
    name:"users",
    initialState: {name:"", password:""},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }
})


export const Login  = userSlice.actions;
export default userSlice;