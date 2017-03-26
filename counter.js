// createStore
// getState
// dispatch
// subscribe

// REDUCER - switch statement
// takes in state and action then returns a new state
function counter(state, action) {
	if (typeof state === 'undefined') {
		return { count: 0 }
	}
	let nextState = {
		count: state.count
	}
	switch (action.type) {
		case "ADD": 
			nextState.count = state.count + 1
			return nextState
			break;
		case "MINUS": 
			nextState.count = state.count - 1
			return nextState
			break;
		case "RESET": 
			nextState.count = 0
			return nextState
			break;
		default:
			return state;
	}
}

// STORE - initiate store
let store = Redux.createStore(
	counter, 
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let counterEl = document.getElementById("counter");


// RENDER function 
function render() {
	let state = store.getState();
	counterEl.innerHTML = state.count.toString();
}
render(); 
//fire render by default - returns state before any actions are dispatched
//when page loads, before any actions fired - returns 0 

// SUBSCRIBE - fires render functions every time there is a change
store.subscribe(render);

// ACTIONS - handlers listening for action, then dispatch action
document.getElementById("add")
.addEventListener('click', function() {
	store.dispatch({ type: "ADD"} );
});

document.getElementById("minus")
.addEventListener('click', function() {
	store.dispatch({ type: "MINUS"} );
});

document.getElementById("reset")
.addEventListener('click', function() {
	store.dispatch({ type: "RESET"} );
});

