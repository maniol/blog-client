import {connect} from 'react-redux';
import AddPostForm from '../components/AddPostForm.component';
import {addPostRequest} from '../actions/actions-posts';

export default connect(null)(AddPostForm);
