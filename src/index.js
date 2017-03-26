import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
	sendingRequest: false, 
	requestReceived: false,
	user: {
		name: '', 
		email: '',
		gender: ''
	},
	status: '',
	statusClass: ''
}

// REDUCER - switch statement
// takes in state and action then returns a new state

function userReducer(state=initialState, action) {
	const user = {
		name: '',
		email: '',
		gender: ''
	};

	switch (action.type) {
		case 'GET_USER':
			return {
				...state, 
				sendingRequest: true, 
				status: 'Pending...', 
				statusClass: 'pending'
			}
			break;
		case 'USER_RECEIVED':
			user.name = `${action.payload[0].name.first} ${action.payload[0].name.last}`
			user.email = `${action.payload[0].email}`
			user.gender = `${action.payload[0].gender}`
			return {
				...state, 
				sendingRequest: false, 
				user, 
				status: 'User Received', 
				statusClass: 'success'
			}
			break;
		case 'ERROR':
			return {
				...state, 
				sendingRequest: false, 
				status: `${action.payload.message}`, 
				statusClass: 'error'
			}
			break;
		default:
			return state;
	}

}

// STORE - initiate store
const store = createStore(
	userReducer, 
	applyMiddleware(logger, thunk), 
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const genderEl = document.getElementById("gender");
const statusEl = document.getElementById("status");


// RENDER function 
function render() {
	const state = store.getState();

	nameEl.innerHTML = state.user.name;
	emailEl.innerHTML = state.user.email;
	genderEl.innerHTML = state.user.gender;
	statusEl.innerHTML = status.state;
	statusEl.className = status.statusClass;
}
render(); 
//fire render by default - returns state before any actions are dispatched
//when page loads, before any actions fired - returns 0 


// SUBSCRIBE - fires render functions every time there is a change
store.subscribe(render);

// ACTIONS - handlers listening for action, then dispatch action

document.getElementById("getUser")
.addEventListener('click', () => {
	store.dispatch( dispatch => {
		// ASYN ACTION
		// dispacth action
		dispatch({ type: 'GET_USER' });
		// do xhr request
		axios.get('https://randomuser.me/api/')
		// handle response
		// success
		.then(response => {
			dispatch({ 
				type: 'USER_RECEIVED', 
				payload: response.data.results
			})
		})
		// error
		.catch(error => {
			dispatch({ 
				type: 'ERROR', 
				payload: error
			})
		})
		dispatch({ type: 'AFTER ASYNC ACTION' });
	});
});


console.log("loaded javascript"); //sanity check