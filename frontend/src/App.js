import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Terrific Tree Frogs Message Board</h1>
        </header>
        <div className="wrapper">
          <aside id="sidebar">
              <ul className="add-post">
                <li><a href="#">Add a Post</a></li>
              </ul>
            <h1>Sort by</h1>
            <ul>
              <li><a href="#">Date</a></li>
              <li><a href="#">Votes</a></li>
            </ul>
            <h1>Categories</h1>
            <ul>
              <li><a href="#">React</a></li>
              <li><a href="#">Redux</a></li>
              <li><a href="#">Udacity</a></li>
            </ul>
          </aside>
          <section id="content">
            <article className="post">
              <h2>Post Title</h2>
              <p className="post-content">
                Insert awesome tree frog post here
              </p>
              <div className="post-meta">
                Date - <a href="#">Upvote</a> - <a href="#">Downvote</a> - <a href="#">View Post</a> - <a href="#">Comments</a>
              </div>
            </article>
            <article className="post">
              <h2>Post Title</h2>
              <p className="post-content">
                Insert awesome tree frog post here
              </p>
              <div className="post-meta">
                Date - <a href="#">Upvote</a> - <a href="#">Downvote</a> - <a href="#">View Post</a> - <a href="#">Comments</a>
              </div>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
