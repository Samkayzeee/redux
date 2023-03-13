// TO ADD USERS

const ADDUSERS = "ADDUSERS";
const DELETEUSERS = "DELETEUSERS";

export const addUsers = (users) => {
    return{
        type: ADDUSERS,
        payload: users
    }
}

// TO DELETE USERS

export const delUsers = (users) => {
    return{
        type: DELETEUSERS,
        payload: users
    }
}