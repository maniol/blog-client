/*import PostList from '../components/PostList.component';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
	posts: store.posts.data
});

export default connect(mapStateToProps)(PostList);*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actions-posts';
import PostList from '../components/PostList.component';

class PostListContainer extends Component {
  componentDidMount() {
    // When container was mounted, we need to start fetching todos.
    this.props.fetchPosts();
  }

  render() {
    // In some simple cases, it is not necessary to create separate `Todos` component. You can put todos markup directly here.
    return <PostList posts={this.props.posts} />
  }
}

// This function is used to convert redux global state to desired props.
function mapStateToProps(store) {
  // `state` variable contains whole redux state.
  return {
    // I assume, you have `todos` state variable.
    // Todos will be available in container component as `this.props.todos`
    posts: store.posts.data
  };
}

// This function is used to provide callbacks to container component.
function mapDispatchToProps(dispatch) {
  return {
    // This function will be available in component as `this.props.fetchTodos`
    fetchPosts: function() {
      dispatch(fetchPosts());
    }
  };
}

// We are using `connect` function to wrap our component with special component, which will provide to container all needed data.
export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);