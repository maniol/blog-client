import {connect} from 'react-redux';
import Post from '../components/Post.component'
import {thumbUpPost, thumbDownPost, removePost } from '../actions/actions-posts'


const mapDispatchToProps = dispatch => ({
	thumbUpPost: (id, votes) => dispatch(thumbUpPost(id, votes)),
	thumbDownPost: (id, votes) => dispatch(thumbDownPost(id, votes)),
	removePost: (id) => dispatch(removePost(id)),
	});

export default connect(null, mapDispatchToProps)(Post);