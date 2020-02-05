import {getJSON, postJSON, deleteJSON} from './petitions';


export function getUser(payload){
    return function (dispatch) {
        return fetch('https://localhost:44364/api/users/RandomUsers/'+payload.quantity)
        .then((response) => response.json())
        .then((json) => {
            dispatch({ type: 'GET_USER', payload: json})
        })
    }
}

export function getAllUsers(){
    return function (dispatch) {
        return fetch('https://localhost:44364/api/users')
        .then((response) => response.json())
        .then((json) => {
            dispatch({ type: 'GET_ALL_USERS', payload: json})
        })
    }
}

export function postUser(payload){
    let data = postJSON('https://localhost:44364/api/users', payload.newUser, 'POST');
    console.log(data);
}

export function deleteUser(payload){
    return function () {
        deleteJSON('https://localhost:44364/api/users/'+payload.id)
    }
}