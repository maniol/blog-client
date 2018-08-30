import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap' 
import PostContainer from '../containers/Post.container';
const PostList = (props) =>
{
	return(
		<div className="container">
			<h1>Check out the latest posts...</h1>
			<Button color="primary">
				<Link to="/addnewpost">Add new post</Link>
			</Button>
			<ul>
				{ props.posts.map(post => <PostContainer key={post.id} {...post}/>)}
			</ul>
		</div>
		)
}
export default PostList;