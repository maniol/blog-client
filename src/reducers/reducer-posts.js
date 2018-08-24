import { ADD_POST, DELETE_POST, EDIT_POST, THUMBUP_POST, THUMBDOWN_POST } from '../actions/actions-posts';

// Initial State
const initialState = { data: [] };

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {data: [{
        id: action.id,
        title: action.post.title,
        text: action.post.text,
        author: action.post.author,
        votes: 0
      }
      , ...state.data]};

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.id !== action.id),
      };

    case EDIT_POST :
      return {
        data: state.data.map(post => { return post.id === action.id ? Object.assign({}, post, action.post) : post } ),
      };

    case THUMBUP_POST :
      return {
        data: state.data.map(post => {
          if (post.id === action.id) {
            return {...post, votes: post.votes += 1 }
            }
          return post;
        })
      };
    case THUMBDOWN_POST :
      return {
        data: state.data.map(post => {
          if (post.cuid === action.cuid) {
            return {...post, votes: post.votes -= 1 }
            }
          return post;
        })
      };
    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by id
export const getPost = (state, id) => state.posts.data.filter(post => post.id === id)[0];

// Export Reducer
export default PostsReducer;
