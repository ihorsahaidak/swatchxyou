/*
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
*/

import { createStore } from 'redux';

function player(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }

    return state;
}

const store = createStore(player);

const list = document.querySelectorAll('.trackList')[0];
const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];

store.subscribe(() => {
    list.innerHTML = '';
    store.getState().forEach(track => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });
    trackInput.value = '';
});


addTrackBtn.addEventListener('click', () => {
    const trackName = trackInput.value;
    store.dispatch({type: 'ADD_TRACK', payload: trackName});
});
