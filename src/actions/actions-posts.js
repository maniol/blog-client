import uuid from 'uuid';
// Export Constants
export const ADD_POST = 'ADD_POST';
export const GET_POSTS = 'ADD_POSTS';
export const GET_POST = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const THUMBUP_POST = 'THUMBUP_POST';
export const THUMBDOWN_POST = 'THUMBDOWN_POST';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
    id: uuid.v4()
  };
}

export function getPosts() {
  return {
    type: GET_POSTS
  };
}

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

export function editPost(id, post) {
  return {
    type: EDIT_POST,
    id,
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

export function thumbDownPost(id, post) {
  return {
    type: THUMBDOWN_POST,
    id,
    post
  };
}
