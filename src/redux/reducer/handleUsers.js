const users = [];
let lastId = 0;

const handleUsers = (state = [], action) => {
    const products = action.payload;
    switch (action.type) {
        case "ADDUSERS":
            return [
                ...state,
                {
                    ...products, id: ++lastId
                }
            ]
            case "DELETEUSERS": 
            return state.filter(user => {user.id !== action.payload});
    
        default:
            return state;
    }
}

export default handleUsers;