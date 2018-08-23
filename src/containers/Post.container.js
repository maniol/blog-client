import React from 'react';
import {connect} from 'react-redux';
import Post from '../components/Post.component'
import {thumbUpPost, thumbDownPost,removePost} from '../actions/actions-posts'
// eslint-disable-next-line

class PostContainer extends React.Component {

	render() { return <Post post={this.props.post} /> }
}

const mapDispatchToProps = dispatch => ({
	thumbUpPost: (id) => dispatch(thumbUpPost(id)),
	thumbDownPost: (id) => dispatch(thumbDownPost(id)),
	removePost: (id) => dispatch(removePost(id))
	});

export default connect(null, mapDispatchToProps)(Post);