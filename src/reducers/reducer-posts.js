import { ADD_POST, GET_POSTS, DELETE_POST, EDIT_POST, THUMBUP_POST, THUMBDOWN_POST } from '../actions/actions-posts';

// Initial State
const initialState = { data: [] };

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case GET_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    case EDIT_POST :
      return {
        data: state.data.map(post => { return post.cuid === action.cuid ? Object.assign({}, post, action.post) : post } ),
      };

    case THUMBUP_POST :
      return {
        data: state.data.map(post => {
          if (post.cuid === action.cuid) {
            return {...post, voteCount: post.voteCount += 1 }
            }
          return post;
        })
      };
    case THUMBDOWN_POST :
      return {
        data: state.data.map(post => {
          if (post.cuid === action.cuid) {
            return {...post, voteCount: post.voteCount -= 1 }
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

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostsReducer;