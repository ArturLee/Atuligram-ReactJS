import React from 'react';
import ReactDOM from 'react-dom';

//import Main from './Components/main'
//import './Styles/stylesheet.css'
import './Styles/stylesheet.scss'
import {BrowserRouter} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'
import thunk from 'redux-thunk'
import {database} from './database/config'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk)),
);
//JSX
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));//param1: what do I want to render, Param2: where do I want to render it?
