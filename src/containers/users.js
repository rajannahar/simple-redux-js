import {connect} from 'react-redux';
import Users from '../components/users';
import fetchUsers from '../actions/users';

const mapStateToProps = (state) => ({
	data: state,
});

const mapDispatchToProps = (dispatch) => {
	return {
		fetchUsers: () => {
			dispatch(fetchUsers())
		}
	}
}
//map a property called fetchusers into our 
//react component
//we can then call this fetchusers property to 
//dispatch out fetchUsers action

const UsersContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Users)

//pass our state to react component
//makes the component smart (aware of state) -> container

export default UsersContainer;