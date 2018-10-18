import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav.js';
import Header from './Header.js';
import PostIndexView from './PostIndexView.js';
import CategoryView from './CategoryView.js';
import PostView from './PostView.js';
import AddPost from './AddPost.js';
import EditPost from './EditPost.js';
import EditComment from './EditComment.js';
import NotFound404 from './NotFound404.js';

class App extends Component {

  render() {

    const CategoryCheck = (props) => {
      if (props.match.params.category === 'frogs'
          || props.match.params.category === 'not-frogs') {
        return <CategoryView cat={props.match.params.category} />
      } else {
        return <NotFound404 />
      }
    }

    return (
      <div className="App">
        <Header />
          <Nav />
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={PostIndexView} />
              <Route path='/add' component={AddPost} />
              <Route path="/404" component={NotFound404} />
              <Route exact path='/:category' component={CategoryCheck} />
              <Route exact path='/:category/:post_id/edit' component={EditPost} />
              <Route exact path='/:category/:post_id/:comment_id/edit' component={EditComment} />
              <Route exact path='/:category/:post_id' component={PostView} />
              <Route path="*" component={NotFound404} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
