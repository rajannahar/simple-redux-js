// createStore
// getState
// dispatch
// subscribe

// REDUCER - switch statement
// takes in state and action then returns a new state
function counterReducer(state, action) {
	if (typeof state === 'undefined') {
		return { count: 0 }
	}

	let nextState = {
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


// Todo Reducer
function todosReducer(state, action) {
	if (typeof state === 'undefined') {
		return { todos: [] }
	}

	let nextState = Object.assign({}, state);
	// creates a new object and clones state - immutable arrays

	switch (action.type) {
		case "NEW":
			nextState.todos.push(action.payload);
			return nextState;
			break;
		case "DELETE":
			nextState.todos.pop();
			return nextState;
			break;
		case "DELETE_ALL":
			nextState.todos = [];
			return nextState;
			break;
		default: 
			return state;
	}
}


// STORE - initiate store
let store = Redux.createStore(
	// counterReducer, 
	// todosReducer,
	Redux.combineReducers({ //combine the 2 reducers 
		counterReducer: counterReducer, 
		todosReducer: todosReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let counterEl = document.getElementById("counter");
let todoInput = document.getElementById("todo");
let todosList = document.getElementById("todoList");


// RENDER function 
function render() {
	let state = store.getState();
	counterEl.innerHTML = state.counterReducer.count.toString();
	renderList(state);
}
render(); 
//fire render by default - returns state before any actions are dispatched
//when page loads, before any actions fired - returns 0 

function renderList(state) {
	todosList.innerHTML = ''; //initiaite a blank list
	for (var i=0; i<state.todosReducer.todos.length; i++) { //for loop - iterating through array
		let li = document.createElement('li'); //create list element - blank li
		let todo = state.todosReducer.todos[i]; //get current todo
		li.innerHTML = todo.toString(); //put todo into li as string
		todosList.appendChild(li); //append li to ul
		
		//iterating through array, 
		//creating li, adding item as string to li
		//appending li to the ul

	}
}

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


document.getElementById("new")
.addEventListener('click', function() {
	store.dispatch({ 
		type: "NEW", 
		payload: todoInput.value
	});
});

document.getElementById("delete")
.addEventListener('click', function() {
	store.dispatch({ type: "DELETE" });
});

document.getElementById("delete_all")
.addEventListener('click', function() {
	store.dispatch({ type: "DELETE_ALL" });
});
