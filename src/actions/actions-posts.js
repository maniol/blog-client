import uuid from 'uuid';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const EDIT_POST = 'EDIT_POST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

export const THUMBUP_POST = 'THUMBUP_POST';
export const THUMBUP_POST_SUCCESS = 'THUMBUP_POST_SUCCESS';
export const THUMBUP_POST_FAILURE = 'THUMBUP_POST_FAILURE';

export const THUMBDOWN_POST = 'THUMBDOWN_POST';
export const THUMBDOWN_POST_SUCCESS = 'THUMBDOWN_POST_SUCCESS';
export const THUMBDOWN_POST_FAILURE = 'THUMBDOWN_POST_FAILURE';


// Export Actions

export function fetchPosts() {
  return function(dispatch) {
    dispatch({
      type: 'GET_POSTS'
    });
    return fetch('/posts',
      { method: "GET", headers: { "Content-Type": "application/json"},
      credentials: "same-origin"
      })
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: 'GET_POSTS_FAILURE',
            error: body.error
          });
        } else {
          dispatch({
            type: 'GET_POSTS_SUCCESS',
            posts: body.posts
          });
        }
      });
  }
}

export function addPost(post) {
  const randomId = uuid.v4();
  const data = {
        author: post.author,
        title: post.title,
        text: post.text,
        id: randomId,
        _id: randomId,
        votes: 0
      };
  return function(dispatch) {
    dispatch({
      type: 'ADD_POST'
    });
    return fetch(
      '/posts',
      { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json"},
      credentials: "same-origin"
      })
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: 'ADD_POST_FAILURE',
            error: body.error
          });
        } else {
          dispatch({
            type: 'ADD_POST_SUCCESS',
            post: post
          });
        }
      });
  }
}

export function removePost(id) {
  return function(dispatch) {
    dispatch({
      type: 'DELETE_POST'
    });
    return fetch(
      `posts/${id}`,
      { method: "DELETE", headers: { "Content-Type": "application/json"},
      credentials: "same-origin"
      })
      .then ((response, error) => {
        if (!response.status === 200) {
          dispatch({
            type: 'DELETE_POST_FAILURE',
            error: error.message
          })
        } else {
          dispatch({
            type: 'DELETE_POST_SUCCESS',
            id: id
          });
        }
      });
  }
}

export function editPost(post) {
  post.votes = 0;
  return function(dispatch) {
    dispatch({
      type: 'EDIT_POST'
    });
    return fetch(
      `posts/${post.id}`,
      { method: "PUT", body: JSON.stringify(post), headers: { "Content-Type": "application/json"},
      credentials: "same-origin"
      })
      .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: 'EDIT_POST_FAILURE',
            error: body.error
          });
        } else {
          dispatch({
            type: 'EDIT_POST_SUCCESS',
            post: body.post
          });
        }
      });
  }
}

export function thumbUpPost(id, votes) {
  votes += 1
  const data = { votes: votes}
  return function(dispatch) {
    dispatch({
      type: 'THUMBUP_POST'
    });
    return fetch(
      `posts/${id}`,
      { method: "PUT", body: JSON.stringify(data), headers: { "Content-Type": "application/json"},
      credentials: "same-origin"
      })
     .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: 'THUMBUP_POST_FAILURE',
            error: body.error
          });
        } else {
          dispatch({
            type: 'THUMBUP_POST_SUCCESS',
            votes: body.post.votes,
            id: id
          });
        }
      });
  }
}

export function thumbDownPost(id, votes) {
  votes -= 1
  const data = { votes: votes}
  return function(dispatch) {
    dispatch({
      type: 'THUMBDOWN_POST'
    });
    return fetch(
      `posts/${id}`,
      { method: "PUT", body: JSON.stringify(data), headers: { "Content-Type": "application/json"},
      credentials: "same-origin"
      })
     .then(response => response.json().then(body => ({ response, body })))
      .then(({ response, body }) => {
        if (!response.ok) {
          dispatch({
            type: 'THUMBDOWN_POST_FAILURE',
            error: body.error
          });
        } else {
          dispatch({
            type: 'THUMBDOWN_POST_SUCCESS',
            votes: body.post.votes,
            id: id
          });
        }
      });
  }
}