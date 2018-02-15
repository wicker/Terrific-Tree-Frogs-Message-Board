import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Sidebar from './Sidebar.js'

class CategoryView extends Component {

  render () {
    return (

      <section id="content">
        <h1>CategoryView</h1>
      </section>

    )
  }

}

class MainPage extends Component {

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
						2 Feb 2018 (20 points) <a href="#">Upvote</a> - <a href="#">Downvote</a> - <a href="/post">View Post</a> - 12 Comments
					</div>
				</article>
				<article className="post">
					<h2>A Cat</h2>
					<p className="post-content">
						<img src="/img/toad.png" />
					</p>
					<div className="post-meta">
						1 Feb 2018 (-11 points) <a href="#">Upvote</a> - <a href="#">Downvote</a> - <a href="/post">View Post</a> - 1 Comment
					</div>
				</article>
				<article className="post">
					<h2>Glorious</h2>
					<p className="post-content">
						<img src="/img/frog.png" />
					</p>
					<div className="post-meta">
						31 Jan 2018 (41 points) <a href="#">Upvote</a> - <a href="#">Downvote</a> - <a href="/post">View Post</a> - 2 Comments
					</div>
				</article>
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

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">
          <a href="/">Terrific Tree Frogs Message Board</a>
        </h1>
      </header>
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
