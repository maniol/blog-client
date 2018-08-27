import {connect} from 'react-redux';
import EditPostForm from '../components/EditPostForm.component';
import { editPost, getPosts } from '../actions/actions-posts';

const mapDispatchToProps = dispatch => ({
		editPost: (post) => dispatch(editPost(post)),
		getPosts: () => dispatch(getPosts())
})


export default connect(null, mapDispatchToProps)(EditPostForm);