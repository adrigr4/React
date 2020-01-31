import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import { Provider } from 'react-redux';
import store from "./store/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById('root'));