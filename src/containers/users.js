import {connect} from 'react-redux';
import Users from '../components/users';

const mapStateToProps = (state) => ({
	data: 'Test',
});

const UsersContainer = connect(
	mapStateToProps,
)(Users);

//pass our state to react component
//makes the component smart (aware of state) -> container

export default UsersContainer;