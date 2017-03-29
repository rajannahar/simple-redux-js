import React from 'react';
import Button from './button';
import UserItem from './userItem';

class Link extends React.Component {
	constructor(props) {
		super(props);
		this.changeUrl = this.changeUrl.bind(this);
	}

	changeUrl() {
		window.location.replace(this.props.newUrl);
	}

	render() {
		return(
			<div>
				<Button
					onClick={this.changeUrl}
					text={`Go to ${this.props.newUrl}`}
					className='btn btn-blue'
				/>
				{this.props.children}
			</div>
		);
	}
}

class Users extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {data, fetchUsers} = this.props;
		return(
			<div className='container'>
				<Button  
					onClick={fetchUsers} 
					text={'Fetch Users'} 
					className={'btn btn-blue'} 
				/>

				<Link newUrl='http://www.google.co.uk'>
					<p>Go to Google UK</p>
					<p>P tag 1</p>
					<p>P tag 2</p>
				</Link>
				{/*Link Component - passing in a new URL as a property,
									passing in a child paragraph  - rendering as we pass in 
										 {this.props.children} into Link component
				*/}

				<div id={'users'}>
					{data.users.map((user, i) => {
						return <UserItem 
							key={i} 
							user={user}
						/>
					})}
				</div>

			</div>
		)
	}
}

export default Users;