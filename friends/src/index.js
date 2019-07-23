import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
// import { createStore } from "redux";
import rootReducer from "./reducers/index";

// needed dependancies
// applyMiddleware from redux
import { applyMiddleware, createStore, compose } from 'redux';

// thunk from redux-thunk
import thunk from 'redux-thunk';

// logger from redux-logger
import logger from 'redux-logger';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))/* applyMiddleware goes here */
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
        document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

