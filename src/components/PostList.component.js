import React from 'react';
import PostContainer from '../containers/Post.container'
import { Link } from 'react-router-dom';

const PostList = ({posts}) =>
	<div>
		<h1>Check out the latest posts...</h1>
		<button>
			<Link to="/addnewpost">Add new post</Link>
		</button>
		<ul>
			{ posts.map(post => <PostContainer key={post.id} {...post}/>)}
		</ul>
	</div>

export default PostList;