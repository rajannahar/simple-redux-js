import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';
import userReducer from './reducers/user';

// STORE - initiate store
export default store = createStore(
	userReducer, 
	applyMiddleware(
		logger, 
		thunk
	)//, 
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);