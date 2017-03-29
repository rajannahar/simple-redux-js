import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
// import thunk from 'redux-thunk';
import axios from 'axios';
import usersReducer from './reducers/users';
import userProfile from './reducers/userProfile';

// STORE - initiate store
//const store = createStore(
export default createStore(
	combineReducers({
		usersReducer, 
		userProfile,
	}), 
	applyMiddleware(
		createLogger(),
        promise()
	)//, 
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//export default store;