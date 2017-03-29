import axios from 'axios';

// ACTIONS - handlers listening for action, then dispatch action

// document.getElementById("getUser")
// .addEventListener('click', () => {
// 	store.dispatch( dispatch => {
// 		// ASYN ACTION
// 		// dispacth action
// 		dispatch({ type: 'GET_USER' });
// 		// do xhr request
// 		axios.get('https://randomuser.me/api/')
// 		// handle response
// 		// success
// 		.then(response => {
// 			dispatch({ 
// 				type: 'USER_RECEIVED', 
// 				payload: response.data.results
// 			})
// 		})
// 		// error
// 		.catch(error => {
// 			dispatch({ 
// 				type: 'ERROR', 
// 				payload: error
// 			})
// 		})
// 		dispatch({ type: 'AFTER ASYNC ACTION' });
// 	});
// });


export function fetchUsers() {
	return {
		type: 'FETCH_USER', 
		payload: axios.get('https://randomuser.me/api/?results=10')
	};
}


export function setUser(user) {
	return {
		type: 'SET_USER',
		payload: user
	}
}