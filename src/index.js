import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Components/main'
import './Styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'

//JSX 
ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root')); //param1: what do I want to render, Param2: where do I want to render it?