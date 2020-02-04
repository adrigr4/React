
export function getUser(payload){
    return function (dispatch) {
        //return fetch('https://randomuser.me/api/?results='+payload.quantity+"&gender="+payload.gender+"&nat="+payload.nationality)
        return fetch('https://localhost:44364/api/users')
        .then((response) => response.json())
        .then((json) => {
            dispatch({ type: 'GET_USER', payload: json})
        })
    }
}