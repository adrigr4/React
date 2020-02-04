import { GET_USER, GET_ALL_USERS, POST_USER } from '../actions/action-types';

const initialState = {
    users: []
};

function rootReducer(state = initialState, action) {

    if (action.type === GET_USER) {
        return {
            users: action.payload
        }
    } else if (action.type === GET_ALL_USERS) {
        return {
            users: action.payload
        }
    } else if (action.type === POST_USER) {
        console.log(action.payload)
    } 

    return state;
};

export default rootReducer;