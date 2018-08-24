import React from 'react';
import { Link } from 'react-router-dom';
import EditPostFormContainer from '../containers/EditPostForm.container';

const Post = ({id, title, text, author, votes, thumbUpPost, thumbDownPost, removePost, editPost}) =>
	<li>
		<h1>{title}</h1>
		<p>{text}</p>
		<span>votes: {votes}</span>
		<div>
			<button onClick={() => thumbUpPost(id)}>Thumb up</button>
			<button onClick={() => thumbDownPost(id)}>Thumb down</button>
			<button>
				<Link to="/editpost">Edit</Link>
			</button>
			<button onClick={() => removePost(id)}>X</button>
		</div>
	</li>

export default Post;

/*class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: true
		}
	}

	handleEditBtn () {
		this.setState({
			redirect:true
		})
	}

	render() {
		if (this.state.redirect) {
			return <Route path="/edit" render={(id, title, text, author)} => <EditPostFormContainer> />}
		}
		return (
			<li>
				<h1>{this.props.title}</h1>
				<p>{this.props.text}</p>
				<span>votes: {this.props.votes}</span>
				<div>
					<button onClick={this.props.thumbUpPost(this.props.id)}>Thumb up</button>
					<button onClick={this.props.thumbDownPost(this.props.id)}>Thumb down</button>
					<button onClick={this.handleEditBtn}>Edit Post</button>
					<button onClick={this.props.removePost(this.props.id)}>X</button>
				</div>
			</li>
		)
	}
}
export default Post;*/