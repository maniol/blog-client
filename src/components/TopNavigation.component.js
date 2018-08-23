import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//Import Style

const TopNavigation = (props) => (
	<div>
		<nav className="navbar navbar-default">
			<div className="container-fluid">
					<ul className="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/posts">Posts</Link></li>
					</ul>
			</div>
		</nav>
		<div className="container-fluid">
			{props.children}
		</div>
	</div>
)

export default TopNavigation;