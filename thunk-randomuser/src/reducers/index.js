import { GET_USER } from '../actions/action-types';

const initialState = {
    users: []
};

function rootReducer(state = initialState, action) {

    if (action.type === GET_USER) {
        console.log(action.payload)
        return {
            users: state.users.concat(action.payload)
        }
    }

    return state;
};

export default rootReducer;