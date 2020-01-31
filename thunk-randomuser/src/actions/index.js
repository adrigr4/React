
export function getUser(payload){
    return function (dispatch) {
        return fetch('https://randomuser.me/api/?results='+payload)
        .then((response) => response.json())
        .then((json) => {
            dispatch({ type: 'GET_USER', payload: json.results})
        })
    }
}