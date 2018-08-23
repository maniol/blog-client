import React from 'react';
import { Redirect } from 'react-router-dom';
import PostListHeader from '../components/PostListHeader.component';
import PostList from '../components/PostList.component';
import { connect } from 'react-redux';
import { getPosts } from '../actions/actions-posts';
// eslint-disable-next-line
class PostListContainer extends React.Component { 
	constructor(props) {
		super(props);
		this.state = { 
			gotonewpost: false,
		};
	}

	addNewPost() {
		this.setState({gotonewpost: true});
	}

	componentDidMount() {
		this.props.dispatch(getPosts());
	}

	render() {
		if (this.state.gotonewpost) {
			return (<Redirect to="/addnewpost"/>)
		}
	 return (
	 	<div>
			<PostListHeader handleAddPostBtn={this.addNewPost.bind(this)} />
			<PostList posts={this.props.posts} />
		</div>
		)
	}
}

const mapStateToProps = function(store) {
	return {
		posts: store.data
	};
};


export default connect(mapStateToProps)(PostList);