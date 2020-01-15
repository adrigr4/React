import { ADD_ARTICLE, RESET_ARTICLES, DELETE_ARTICLE, EDIT_ARTICLE } from './action-types';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}
export function resetArticles() {
    return { type: RESET_ARTICLES };
}
export function deleteArticle(number) {
    return { type: DELETE_ARTICLE, payload: number };
}
export function editArticle(payload) {
    return { type: EDIT_ARTICLE, payload };
}