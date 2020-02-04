
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
    return function (dispatch) {
        return fetch('https://localhost:44364/api/users'), {
            method: 'POST',
            body: JSON.stringify(payload.newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        .then((response) => response.json())
        .then((json) => {
            dispatch({ type: 'POST_USER', payload: json})
            console.log(json)
        })
    }
}