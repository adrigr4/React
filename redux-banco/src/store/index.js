import { createStore } from "redux";
import rootReducer from '../reducers';
import {loadState, saveState} from './options.js'

//localStorage.removeItem('state');

const initialData = loadState();

const store = createStore(rootReducer, initialData);

//setInterval(store.getState(), 5000);

store.subscribe( function () {
  saveState(store.getState())
});

export default store;