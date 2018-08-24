import React from 'react';
import ReactDOM from 'react-dom';
import { Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/App.component';

ReactDOM.render (
	<Provider store={store}>
		<Router history={createHistory()}>
		<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

