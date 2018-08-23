import React from 'react';
import AddNewPostForm from '../components/AddNewPostForm.component';
import { addPost } from '../actions/actions-posts';

class AddNewPostFormContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title:'',
			body: '',
			author: ''
		}
		this.handleChangeField = this.handleChangeField.bind(this);
		this.handleSubmit = this.handleSumbmit.bind(this);
	}
	handleChangeField(key, event) {
		this.setState({
			[key]: event.target.value,
		});
	}
	handleSubmit() {
		this.props.dispatch(addPost());
	}
	render() { return
		// eslint-disable-next-line
		<AddNewPostForm handleSubmit={this.handleSubmit} />
	}
}

export default AddNewPostFormContainer