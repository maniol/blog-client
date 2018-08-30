import {connect} from 'react-redux';
import EditPostForm from '../components/EditPostForm.component';
import { editPost } from '../actions/actions-posts';

const mapDispatchToProps = dispatch => ({
		editPost: (post) => dispatch(editPost(post)),
})


export default connect(null, mapDispatchToProps)(EditPostForm);