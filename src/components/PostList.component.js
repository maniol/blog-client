import React from 'react';
import PostContainer from '../containers/Post.container'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap' 

const PostList = ({posts}) =>
	<div className="container">
		<h1>Check out the latest posts...</h1>
		<Button color="primary">
			<Link to="/addnewpost">Add new post</Link>
		</Button>
		<ul>
			{ posts.map(post => <PostContainer key={post.id} {...post}/>)}
		</ul>
	</div>

export default PostList;