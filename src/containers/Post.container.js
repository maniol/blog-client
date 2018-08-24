import {connect} from 'react-redux';
import Post from '../components/Post.component'
import {thumbUpPost, thumbDownPost, removePost } from '../actions/actions-posts'


const mapDispatchToProps = dispatch => ({
	thumbUpPost: (id) => dispatch(thumbUpPost(id)),
	thumbDownPost: (id) => dispatch(thumbDownPost(id)),
	removePost: (id) => dispatch(removePost(id)),
	});

export default connect(null, mapDispatchToProps)(Post);