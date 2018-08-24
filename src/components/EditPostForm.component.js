import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class EditPostForm extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
        author: this.props.author,
        title: this.props.title,
        text: this.props.text,
        redirect: false
    };
  }

  handleSubmit() {
    const post = this.state;
    this.props.editPost(post);
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
        <div className="col-12 col-lg-6 offset-lg-3">
          <input
            onChange={(event) => this.handleChange('title', event)}
            value={this.state.title}
            className="form-control my-3"
            placeholder="Post Title"
          />
          <textarea
            onChange={(event) => this.handleChange('text', event)}
            value={this.state.text}
            className="form-control my-3"
            placeholder="Post Description">
          </textarea>
          <input
            onChange={(event) => this.handleChange('author', event)}
            value={this.state.author}
            className="form-control my-3"
            placeholder="Post Author"
          />
          <button className="btn btn-primary float-right" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
      )
    }
}

export default EditPostForm;
