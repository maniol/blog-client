import React from 'react';

const AddNewPostForm = (props) => (
	 <div className="col-12 col-lg-6 offset-lg-3">
   	<input
   		onChange={(event) => this.handleChangeField('title', event)}
   		value={this.state.title}
   		className="form-control my-3"
   		placeholder="Post Title"
   	/>
    <textarea
    	onChange={(event) => this.handleChangeField('body', event)}
    	value={this.state.body}
     	className="form-control my-3"
     	placeholder="Post Description">
    </textarea>
    <input
    	onChange={(event) => this.handleChangeField('author', event)}
    	value={this.state.author}
     	className="form-control my-3"
     	placeholder="Post Author"
     />
    <button className="btn btn-primary float-right" onClick={props.handleSubmit}>Submit</button>
   </div>
)

export default AddNewPostForm;