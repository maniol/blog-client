  import { ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE, DELETE_POST, EDIT_POST, THUMBUP_POST, THUMBDOWN_POST, GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '../actions/actions-posts';
// Initial State
const initialState = {
  data: [],
  error: undefined
  };

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return { data: state.data };

    case ADD_POST_SUCCESS :
      return {data: [action.post, ...state.data],
      };

    case ADD_POST_FAILURE :
      return {
        data: Object.assign({}, state, {error: action.error}),
      };

    case GET_POSTS:
       return Object.assign({}, state, {
        data: state.data
      });

    case GET_POSTS_SUCCESS:
       return Object.assign({}, state, {
        data: action.posts
      });

    case GET_POSTS_FAILURE:
      return {
        data: Object.assign({}, state, {error: action.error}),
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.id !== action.id),
      };

    case EDIT_POST :
      return {
        data: state.data.map(post => { return post.id === action.post.id ? Object.assign({}, post, action.post) : post } ),
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
          if (post.id === action.id) {
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

/*// Get all posts
export const getPosts = state => state.posts.data;*/

// Get post by id
export const getPost = (state, id) => state.posts.data.filter(post => post.id === id)[0];

// Export Reducer
export default PostsReducer;




