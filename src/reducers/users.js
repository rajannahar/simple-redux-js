// REDUCER - switch statement
// takes in state and action then returns a new state

// Promise
// pending
// fulfilled 
// rejected
const initalState = {
  sendingRequest: false,
  requestRecieved: false,
  user: {
    name: '',
    email: '',
    gender: ''
  },
  status: '',
  statusClass: ''
}

function usersReducer(state=initialState, action) {
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

export default usersReducer;