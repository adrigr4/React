import { ADD_ARTICLE, RESET_ARTICLES, DELETE_ARTICLE, EDIT_ARTICLE, UPDATE_ARTICLE } from '../actions/action-types';

const initialState = {
    articles: [{ title: "Hola", id: 1 }],
    lastId: 1,
    article: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return {
            articles: state.articles.concat({title: action.payload.title, id: state.lastId + 1}),
            lastId: state.lastId + 1
        };
    }
    if (action.type === DELETE_ARTICLE) {
        return {
            articles: state.articles.filter(el=>el.id!==action.payload),
            lastId: state.lastId,
            article:{}
        };
    } else if (action.type === RESET_ARTICLES) {
        return Object.assign({}, state, {
            articles: []
        });
    } if (action.type === EDIT_ARTICLE) {
        return {
            articles: state.articles,
            lastId: state.lastId,
            article: action.payload
        };
    }
    if (action.type === UPDATE_ARTICLE) {

        return {
            articles: state.articles.map(el => (el.id === state.article.id) ? { id: el.id, title: action.payload } : el),
            lastId: state.lastId,
            article: {}
        };
    }
return state;
};

export default rootReducer;