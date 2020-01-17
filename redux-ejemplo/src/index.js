import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from "./store/index.js";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'; 

ReactDOM.render(
    <div className="ml-5 mt-3">
    <Provider store={store}>
        <App/>
    </Provider>
    </div>,
    document.getElementById('root'));