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
								<p className="mt-5 text-muted"><b>By {author}</b></p>
								<p className="float-right">votes: {votes}</p>
							</CardText>
						</CardBody>
						<CardFooter>
							<Row>
								<Button outline color="secondary" size="sm" onClick={() => thumbUpPost(id)}><i class="fas fa-thumbs-up"></i></Button>
								<Button outline color="secondary" size="sm" onClick={() => thumbDownPost(id)}><i class="fas fa-thumbs-down"></i></Button>
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

/*class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: true
		}
	}

	handleEditBtn () {
		this.setState({
			redirect:true
		})
	}

	render() {
		if (this.state.redirect) {
			return <Route path="/edit" render={(id, title, text, author)} => <EditPostFormContainer> />}
		}
		return (
			<li>
				<h1>{this.props.title}</h1>
				<p>{this.props.text}</p>
				<span>votes: {this.props.votes}</span>
				<div>
					<button onClick={this.props.thumbUpPost(this.props.id)}>Thumb up</button>
					<button onClick={this.props.thumbDownPost(this.props.id)}>Thumb down</button>
					<button onClick={this.handleEditBtn}>Edit Post</button>
					<button onClick={this.props.removePost(this.props.id)}>X</button>
				</div>
			</li>
		)
	}
}
export default Post;*/