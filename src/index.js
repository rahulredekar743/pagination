import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reduxthunk from "redux-thunk";


import App from './components/App';
import reducer from './reducers'
import axios from 'axios';

window.axios = axios;
const composeEnhancers = compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(reduxthunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);