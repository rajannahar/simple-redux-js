function userProfile(state=null, action) {
	switch (action.type) {
		case 'SET_USER':
			return action.payload;
			break;
		default:
			return state;
	}
}

export default userProfile;