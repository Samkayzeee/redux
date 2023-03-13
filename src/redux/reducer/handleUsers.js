const users = [];
const lastId = 0;

const handleUsers = (state = [], action) => {
    switch (action.type) {
        case "ADDUSERS":
            return [
                ...state,
                action.payload
            ]
            case "DELETEUSERS": 
            return state.filter(user => {user.id !== action.payload});
    
        default:
            return state;
    }
}

export default handleUsers;