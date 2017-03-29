import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';
import usersReducer from './reducers/users';

// STORE - initiate store
const store = createStore(
	usersReducer, 
	applyMiddleware(
		logger
	), 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;