import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Sidebar from './Sidebar.js'
import Header from './Header.js'
import PostIndexView from './PostIndexView.js'
import CategoryView from './CategoryView.js'
import PostView from './PostView.js'
import AddPost from './AddPost.js'
import EditPost from './EditPost.js'

class NotFound404 extends Component {
  render () {
    return (
			<section id="content">
        <h2>There's nothing here!</h2>
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
			<div className="App">
        <Header />
				<div className="wrapper">
          <Sidebar />
					<div>
						<Switch>
							<Route exact path="/" component={PostIndexView} />
							<Route path='/category/:category' component={CategoryView} />
							<Route path='/post/:post_id/edit' component={EditPost} />
							<Route path='/post/:post_id' component={PostView} />
							<Route path='/add' component={AddPost} />
						  <Route path="*" component={NotFound404} />
            </Switch>
					</div>

        </div>
      </div>
    );
  }
}

export default App;
