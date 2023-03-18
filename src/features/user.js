import { createSlice } from "@reduxjs/toolkit";
const users = [];
let lastId = 0;

const userSlice = createSlice({
    name:"users",
    initialState: {value: users},
    reducers: {
        login: (state, action) => {
            const user = action.payload;
            state.value = [...state.value, {...user, id: ++lastId, qty: 1}];
        },
        removeuser: (state, action) => {
            const id = action.payload;
            const removeuser = state.value.find((user) => {user.id === id});
            if (removeuser) {
                state.value = state.value.filter((user) => {user.id !== id});
            }
        }
    }
})


export const Login  = userSlice.actions;
export default userSlice;