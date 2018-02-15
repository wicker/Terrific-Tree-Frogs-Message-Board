import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPosts } from '../actions'

class MainPage extends Component {

  componentWillMount () {
    this.props.updatePosts();
  }

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

const mapStateToProps = state => ({
   posts: state.posts
 })

const mapDispatchToProps = dispatch => ({
  dispatch,
  updatePosts: () => dispatch(getAllPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
