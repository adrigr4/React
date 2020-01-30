import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers';
import {loadState, saveState} from './options.js';
import logger from '../middlewares';

//localStorage.removeItem('state');

const initialData = loadState();

const store = createStore(rootReducer, initialData, applyMiddleware(logger));

//setInterval(store.getState(), 5000);

store.subscribe( function () {
  saveState(store.getState())
});

export default store;