import uuid from 'uuid';
/*import callApi from './../helpers/callApi';*/
// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const THUMBUP_POST = 'THUMBUP_POST';
export const THUMBDOWN_POST = 'THUMBDOWN_POST';


// Export Actions

export function fetchPosts() {
  // Instead of plain objects, we are returning function.
  return function(dispatch) {
    // Dispatching REQUEST action, which tells our app, that we are started requesting todos.
    dispatch({
      type: 'GET_POSTS'
    });
    return fetch('/posts')
      // Here, we are getting json body(in our case it will contain `todos` or `error` prop, depending on request was failed or not) from server response
      // And providing `response` and `body` variables to the next chain.
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          // If request was failed, dispatching FAILURE action.
          dispatch({
            type: 'GET_POSTS_FAILURE',
            error: body.error
          });
        } else {
          // When everything is ok, dispatching SUCCESS action.
          dispatch({
            type: 'GET_POSTS_SUCCESS',
            posts: body.posts
          });
        }
      });
  }
}


export function addPost(post) {
  const postReq = {
        author: post.author,
        title: post.title,
        text: post.text,
        id: uuid.v4(),
        votes: 0
      };
  // Instead of plain objects, we are returning function.
  return function(dispatch) {
    // Dispatching REQUEST action, which tells our app, that we are started requesting todos.
    dispatch({
      type: 'ADD_POST'
    });
    return fetch('/posts', {method: 'post', body: JSON.stringify(postReq)})
      // Here, we are getting json body(in our case it will contain `todos` or `error` prop, depending on request was failed or not) from server response
      // And providing `response` and `body` variables to the next chain.
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          // If request was failed, dispatching FAILURE action.
          dispatch({
            type: 'ADD_POST_FAILURE',
            error: body.error
          });
        } else {
          // When everything is ok, dispatching SUCCESS action.
          dispatch({
            type: 'ADD_POST_SUCCESS',
            post: post
          });
        }
      });
  }
}


/*export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        author: post.author,
        title: post.title,
        text: post.text,
        id: uuid.v4(),
        votes: 0
      },
    })
    .then(res => dispatch(addPost(res.post)));
  };
}


export function getPosts() {
  return {
    type: GET_POSTS
  };
}*/

export function getPost(id) {
    return {
        type: GET_POST,
        id
    }
}


export function removePost(id) {
  return {
    type: DELETE_POST,
    id,
  };
}

//when id param is added, post becomes unidentified hence action.post.id in reducer line 31
export function editPost(post) {
  return {
    type: EDIT_POST,
    post
  };
}

export function thumbUpPost(id, post) {
  return {
    type: THUMBUP_POST,
    id,
    post
  };
}
//post is unindentified
export function thumbDownPost(id, post) {
  return {
    type: THUMBDOWN_POST,
    id,
    post
  };
}
