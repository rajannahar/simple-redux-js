import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

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


// STORE - initiate store
const store = createStore(
	counterReducer, 
	applyMiddleware(logger), 
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