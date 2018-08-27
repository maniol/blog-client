import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const HomeComponent = () =>
(
	<Container>
		<Row>
			<Col xs="12" lg={{size: 6, offset:3}}>
				<h1>Welcome to my blog</h1>
			</Col>
		</Row>
	</Container>
	)

export default HomeComponent;