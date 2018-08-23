import React from 'react';

const Post = ({text, votes, id, thumbUpPost, thumbDownPost, removePost}) =>
	<li>
		{text} <span>votes: {votes}</span>
		<button onClick={() => thumbUpPost(id)}>Thumb up</button>
		<button onClick={() => thumbDownPost(id)}>Thumb down</button>
		<button onClick={() => removePost(id)}>X</button>
		</li>

export default Post;