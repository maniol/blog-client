import PostList from '../components/PostList.component';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
	posts: store.posts.data
});

export default connect(mapStateToProps)(PostList);