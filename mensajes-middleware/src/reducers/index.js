import { ADD_ARTICLE, RESET_ARTICLES, DELETE_ARTICLE, EDIT_ARTICLE, UPDATE_ARTICLE } from '../actions/action-types';

const initialState = {
    messages: [],
    lastId: 1,
    article: {}
};

function rootReducer(state = initialState, action) {
    
    if (action.type === ADD_ARTICLE) {
        return {
            messages: state.messages.concat({title: action.payload.title, id: state.lastId + 1}),
            lastId: state.lastId + 1
        };
    }
    if (action.type === DELETE_ARTICLE) {
        return {
            messages: state.messages.filter(el=>el.id!==action.payload),
            lastId: state.lastId,
            article:{}
        };
    } else if (action.type === RESET_ARTICLES) {
        return Object.assign({}, state, {
            messages: []
        });
    } if (action.type === EDIT_ARTICLE) {
        return {
            messages: state.messages,
            lastId: state.lastId,
            article: action.payload
        };
    }
    if (action.type === UPDATE_ARTICLE) {

        return {
            messages: state.messages.map(el => (el.id === state.article.id) ? { id: el.id, title: action.payload } : el),
            lastId: state.lastId,
            article: {}
        };
    }
return state;
};

export default rootReducer;