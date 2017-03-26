import { createStore, applyMiddleware } from 'redux';

// REDUCER - switch statement
// takes in state and action then returns a new state
function counterReducer(state = { count: 0 }, action) {

	const nextState = {
		count: state.count
	}

	switch (action.type) {
		case "ADD": 
			nextState.count = state.count + 1;
			return nextState;
			break;
		case "MINUS": 
			nextState.count = state.count - 1;
			return nextState;
			break;
		case "RESET": 
			nextState.count = 0;
			return nextState;
			break;
		default:
			return state;
	}
}

const logger = store => next => action => {
	console.log("dispatching", action);
	let result = next(action);
	console.log("next state", store.getState());
	return result;
}

const error = store => next => action => {
	console.log("new action", action);
	try {
		next(action);
	} catch (error) {
		console.log("error");
	}
}

// const logger = function(store) {
// 	return function(next) {
// 		return function (action) {
// 			console.log("dispatch", action)
// 			let result = next(action)
// 			return result
// 		}
// 	}
// }
// This is the es5 equivalent


// STORE - initiate store
const store = createStore(
	counterReducer, 
	applyMiddleware(logger, error), 
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const counterEl = document.getElementById("counter");


// RENDER function 
function render() {
	const state = store.getState();
	counterEl.innerHTML = state.count.toString();
}
render(); 
//fire render by default - returns state before any actions are dispatched
//when page loads, before any actions fired - returns 0 


// SUBSCRIBE - fires render functions every time there is a change
store.subscribe(render);

// ACTIONS - handlers listening for action, then dispatch action
document.getElementById("add")
.addEventListener('click', () => {
	store.dispatch({ type: "ADD"} );
});

document.getElementById("minus")
.addEventListener('click', () => {
	store.dispatch({ type: "MINUS"} );
});

document.getElementById("reset")
.addEventListener('click', () => {
	store.dispatch({ type: "RESET"} );
});


console.log("loaded javascript"); //sanity check