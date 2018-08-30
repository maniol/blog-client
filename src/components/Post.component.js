import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardText, CardFooter } from 'reactstrap';
const Post = ({id, title, text, author, votes, thumbUpPost, thumbDownPost, removePost, editPost}) =>
	(
		<Container>
			<Row>
				<Col sm="12" lg={{size: 6, offset: 3}}>
					<Card>
						<CardHeader>{title}</CardHeader>
						<CardBody>
							<CardText>
								{text}
							</CardText>
							<p className="mt-5 text-muted"><b>By {author}</b></p>
							<p className="float-right">votes: {votes}</p>
						</CardBody>
						<CardFooter>
							<Row>
								<Button outline color="secondary" size="sm" onClick={() => thumbUpPost(id, votes)}><i className="fas fa-thumbs-up"></i></Button>
								<Button outline color="secondary" size="sm" onClick={() => thumbDownPost(id, votes)}><i className="fas fa-thumbs-down"></i></Button>
								<Button color="primary "size="sm">
									<Link to={{
										pathname: "/editpost",
										state: {
											id:id,
											title:title,
											text:text,
											author:author
										}}}>Edit</Link>
								</Button>
								<Button color="danger" size="sm" onClick={() => removePost(id)}>Delete</Button>
							</Row>
						</CardFooter>
					</Card>
				</Col>
			</Row>
		</Container>
	)

export default Post;