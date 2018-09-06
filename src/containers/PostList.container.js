import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actions-posts';
import PostList from '../components/PostList.component';

class PostListContainer extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return <PostList posts={this.props.posts} />
	}
}

function mapStateToProps(store) {
	return {
		posts: store.posts.data
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchPosts: function() {
			dispatch(fetchPosts());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);