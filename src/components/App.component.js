import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Import Style

//Import Components
import HomeComponent from './Home.component';
import AboutComponent from './About.component';
import PostListContainer from '../containers/PostList.container';
import AddPostFormContainer from '../containers/AddPostForm.container';
import EditPostFormContainer from '../containers/EditPostForm.container';
import TopNavigation from './TopNavigation.component';


const App = () => {
  return (
  	<div>
  		<TopNavigation />
    	<Switch>
      	<Route exact path="/" component={HomeComponent} />
      	<Route exact path="/about" component={AboutComponent} />
      	<Route exact path="/posts" component={PostListContainer} />
        <Route exact path="/addnewpost" component={AddPostFormContainer} />
        <Route exact path="/editpost" component={EditPostFormContainer} />
    	</Switch>
   	</div>
    )
}

export default App;
