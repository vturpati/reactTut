import React  from 'react';
import {Component}  from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers/searchReducer';
import SearchContainer from './container/serachContainer';
import ReduxPromise from 'redux-promise';



const createStorewithmiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStorewithmiddleware(reducers);


ReactDOM.render(<Provider store = {store}><SearchContainer /></Provider>,document.querySelector("#search"));