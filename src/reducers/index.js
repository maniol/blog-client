import { combineReducers } from 'redux';
import posts  from './reducer-posts';

const reducers = combineReducers({
	posts,
});

export default reducers;