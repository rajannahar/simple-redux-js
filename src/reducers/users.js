// REDUCER - switch statement
// takes in state and action then returns a new state

// Promise
// pending
// fulfilled 
// rejected
const initialState = {
  users: [],
  loading: false, 
  error: null,
};

function usersReducer(state=initialState, action) {
	let users;

	switch (action.type) {
		case 'FETCH_USER_PENDING':
			return { ...state, loading: true };
			break;
		case 'FETCH_USER_FULFILLED':
			users = action.payload.data.results; //return array of users from api
			return { ...state, loading: false, users };
			break;
		case 'FETCH_USER_REJECTED':
			return { ...state, loading: false, error: `${action.payload.message}` };
			break;
		default:
			return state;
	}

}

export default usersReducer;