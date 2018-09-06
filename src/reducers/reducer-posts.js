	import { ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE, DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, EDIT_POST,EDIT_POST_SUCCESS, EDIT_POST_FAILURE, THUMBUP_POST, THUMBUP_POST_SUCCESS, THUMBUP_POST_FAILURE, THUMBDOWN_POST, THUMBDOWN_POST_SUCCESS, THUMBDOWN_POST_FAILURE, GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '../actions/actions-posts';
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
			return Object.assign({}, state, {
				data: state.data
			});

		case DELETE_POST_SUCCESS :
			return {
				data: state.data.filter(post => post._id !== action.id),
			};

		case DELETE_POST_FAILURE :
			return {
				data: Object.assign({}, state, {error: action.error}),
			};

		case EDIT_POST :
			return Object.assign({}, state, {
				data: state.data
			});

		case EDIT_POST_SUCCESS :
			return {
				data: state.data.map(post => { return post._id === action.post._id ? Object.assign({}, post, action.post) : post } ),
			};

		case EDIT_POST_FAILURE :
			return {
				data: Object.assign({}, state, {error: action.error}),
			};

		case THUMBUP_POST :
			return Object.assign({}, state, {
				data: state.data
			});

		case THUMBUP_POST_SUCCESS :
			return {
				data: state.data.map(post => {
					if (post._id === action.id) {
						return {...post, votes: action.votes }
						}
					return post;
				})
			};

		case THUMBUP_POST_FAILURE :
			return {
				data: Object.assign({}, state, {error: action.error}),
			};

		case THUMBDOWN_POST :
			return Object.assign({}, state, {
				data: state.data
			})

		 case THUMBDOWN_POST_SUCCESS :
			return {
				data: state.data.map(post => {
					if (post._id === action.id) {
						return {...post, votes: action.votes }
						}
					return post;
				})
			};
		 case THUMBDOWN_POST_FAILURE :
			return {
				data: Object.assign({}, state, {error: action.error}),
			};
		default:
			return state;
	}
};


// Export Reducer
export default PostsReducer;




