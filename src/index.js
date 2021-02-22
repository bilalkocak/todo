import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import rootSaga from "./sagas/saga";

import "./styles/css/antd.css";
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
