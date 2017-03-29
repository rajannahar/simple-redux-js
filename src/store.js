import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
// import thunk from 'redux-thunk';
import axios from 'axios';
import usersReducer from './reducers/users';

// STORE - initiate store
const store = createStore(
	usersReducer, 
	applyMiddleware(
		createLogger(),
        promise()
	)//, 
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;