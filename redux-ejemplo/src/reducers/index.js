import { ADD_ARTICLE, RESET_ARTICLES, DELETE_ARTICLE, EDIT_ARTICLE } from '../actions/action-types';

const initialState = {
    articles: [{title:"Hola", id: 0}],
    lastId: 1
};

function rootReducer(state = initialState, action){
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat({title: action.payload.title, id: state.lastId}),
            lastId: state.lastId + 1
        });
    } else if (action.type === RESET_ARTICLES){
        return Object.assign({}, state, {
            articles: []
        });
    } else if (action.type === DELETE_ARTICLE){
        return Object.assign({}, state, {
            articles: state.articles.filter(item => (item.id !== action.payload))
          });
    }else if (action.type === EDIT_ARTICLE){
        return Object.assign({}, state, {
        articles: state.articles.map(article => 
            article.id === action.payload.id ? { ...article, completed: action.payload.title } : article)
    });
}
    return state;
};

export default rootReducer;