import { combineReducers } from 'redux';
import posts  from './reducer-posts';
import app  from './reducer-app';

const reducers = combineReducers({
	posts,
	app
});

export default reducers;