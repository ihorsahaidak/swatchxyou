
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


import { Provider } from 'react-redux';
import { createStore } from 'redux';

const  initialState = [
   'test one',
   'test two'
];

function reducer(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }

    return state;
}

const store = createStore(reducer);
const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    root
);

















