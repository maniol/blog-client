import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

class AddPostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			author: '',
			title: '',
			text: '',
			redirect: false
		};
	}

	handleSubmit() {
		const post = this.state;
		this.props.addPost(post);
		this.setState( {
			author: '',
			title: '',
			text: '',
			redirect: true
		});
	}

	handleChange(field, e) {
		this.setState({
			[field]: e.target.value
		})
	}
	
	render(){
			if (this.state.redirect) {
				return <Redirect to='/posts' />
			}
			return(
				<Container>
					<Row>
						<Col sm="12" md={{size: 8, offset: 2}}>
							<Form>
								<FormGroup>
									<Input
										type="text"
										onChange={(event) => this.handleChange('title', event)}
										value={this.state.title}
										placeholder="Post Title"
									/>
								</FormGroup>
								<FormGroup>
									<Input
										type="textarea"
										onChange={(event) => this.handleChange('text', event)}
										value={this.state.text}
										placeholder="Post Description"
									/>
								</FormGroup>
								<FormGroup>
									<Input
										type="text"
										onChange={(event) => this.handleChange('author', event)}
										value={this.state.author}
										placeholder="Post Author"
									/>
								</FormGroup>
									<Button color="primary" className="float-right" onClick={this.handleSubmit.bind(this)}>Submit</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			)
		}
	}

export default AddPostForm;
