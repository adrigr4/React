import { ADD_ARTICLE, RESET_ARTICLES, DELETE_ARTICLE, EDIT_ARTICLE, UPDATE_ARTICLE } from './action-types';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}
export function resetArticles() {
    return { type: RESET_ARTICLES };
}
export function deleteArticle(number) {
    return { type: DELETE_ARTICLE, payload: number };
}
export function editArticle(article) {
    return { type: EDIT_ARTICLE, payload: article };
}
export function updateArticle(article) {
    return { type: UPDATE_ARTICLE, payload: article };
}

export function getData() {
    return function (dispatch) {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: 'DATA_LOADED', payload: json })
            })
    }
}