import {connect} from 'react-redux';
import AddPostForm from '../components/AddPostForm.component';
import { addPost } from '../actions/actions-posts';

const mapDispatchToProps = dispatch => ({
		addPost: (post) => dispatch(addPost(post))
})

export default connect(null, mapDispatchToProps)(AddPostForm);