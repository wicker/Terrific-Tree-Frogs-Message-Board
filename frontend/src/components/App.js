import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Sidebar from './Sidebar.js'
import Header from './Header.js'
import MainPage from './MainPage.js'

class CategoryView extends Component {

  render () {
    return (

      <section id="content">
        <h1>CategoryView</h1>
      </section>

    )
  }

}

class CreateEditView extends Component {

  render () {
    return (

			<section id="content">
        <h1>CreateEdit</h1>
      </section>

    )
  }

}

class PostView extends Component {

  render () {
    return (

			<section id="content">
				<article className="post">
					<h2>The Tree Frog</h2>
					<p className="post-content">
						<em>It is not the chambers of the heart that hold him<br />
						captive, but the hallways of the mind. Why<br />
						his image burning green and blue persists<br />
						—the face, the eyes questioning, the shape<br />
						of his head—is beyond anything I can understand. </em>
					</p>
          <p className="post-content">
						by <a href="https://www.poetryfoundation.org/poems/58767/the-tree-frog" target="_blank">C. Dale Young</a>
					</p>
					<div className="post-meta">
						Date - 41 points - <a href="#">Upvote</a> - <a href="#">Downvote</a> - <a href="/post">View Post</a> - 12 Comments
					</div>
				</article>
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
							<Route path='/category' render={({ history }) => (
								<CategoryView />
							)}/>
							<Route path='/post' render={({ history }) => (
								<PostView />

							)}/>
							<Route path='/create' render={({ history }) => (
								<CreateEditView />

							)}/>
							<Route path="/" render={() => (
								<MainPage />
							)}/>
						</Switch>
					</div>

        </div>
      </div>
    );
  }
}

export default App;
