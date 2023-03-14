const users = [];
let lastId = 0;
import { createSlice } from "@reduxjs/toolkit";

const handleUsers = (state = users, action) => {
    // const products = action.payload;
    // switch (action.type) {
    //     case "ADDUSERS":
    //         return [
    //             ...state,
    //             {
    //                 ...products, id: ++lastId
    //             }
    //         ]
    //         case "DELETEUSERS": 
    //         return state.filter(user => {user.id !== action.payload});
    
    //     default:
    //         return state;
    // }
}

// export default handleUsers;


const userSlice = createSlice({
    name: "users",
    initialState: {
        usersList : users,
    },
    reducers: {
        addUsers(state, action) {
            const newUser = action.payload
        // check if users already exist
        
        const userExist = state.itemsList.find(x =>  x.id === newUser.id);
        if (userExist) {
            return [
                ...state, {
                    ...userExist,
                        qty: qty++
                }
            ]
        } 
        else{
            return[
                ...state, {
                    ...newUser,
                    qty: 1,
                    id: ++lastId
                }
            ]
        }
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice;