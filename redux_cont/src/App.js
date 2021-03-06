import React from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <div className="container mt-3">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
