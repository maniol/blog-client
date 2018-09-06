import React from 'react';
import { Link } from 'react-router-dom';

//Import Style
import {
	Nav,
	NavItem } from 'reactstrap';

const TopNavigation = (props) => (
	<div>
			<Nav pills>
				<NavItem><Link to="/">Home</Link></NavItem>
				<NavItem><Link to="/about">About</Link></NavItem>
				<NavItem><Link to="/posts">Posts</Link></NavItem>
			</Nav>
			<hr />
	</div>
)

export default TopNavigation;