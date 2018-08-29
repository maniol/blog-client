import {connect} from 'react-redux';
import EditPostForm from '../components/EditPostForm.component';
import { editPost, fetchPosts } from '../actions/actions-posts';

const mapDispatchToProps = dispatch => ({
		editPost: (post) => dispatch(editPost(post)),
		getPosts: () => dispatch(fetchPosts())
})


export default connect(null, mapDispatchToProps)(EditPostForm);