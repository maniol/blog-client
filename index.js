import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';
import { Route, Switch, Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';


import App from './components/App.component';
import './resources/scss/style.scss';



ReactDOM.render(
	<Provider store={store}>
		<Router history={createHistory()}>
			<Switch>
				<Route path='/' component={App} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);

