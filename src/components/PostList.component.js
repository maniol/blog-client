import React from 'react';
import PostContainer from '../containers/Post.container'

const PostList = ({posts}) =>
	<ul>
		{ posts.map(post => <PostContainer key={post.id} {...post}/>)}
	</ul>

export default PostList;