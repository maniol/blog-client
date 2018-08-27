import uuid from 'uuid';
// Export Constants
export const ADD_POST = 'ADD_POST';
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
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

//when id param is added, post becomes unidentified hence action.post.id in reducer line 31
export function editPost(post) {
  console.log(post)
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
