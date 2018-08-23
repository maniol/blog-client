import React from 'react';

const PostListHeader = (props) => (
	<div className="container">
		<h1>Check out the latest posts...</h1>
		<button onClick={props.handleAddPostBtn}>Add Post</button>
	</div>
)

export default PostListHeader;