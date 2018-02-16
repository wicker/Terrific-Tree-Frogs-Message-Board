import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPosts } from '../actions'

class PostIndexView extends Component {

  componentWillMount () {
    this.props.updatePosts();
  }

  render () {

    return (

			<section id="content">
        {Object.values(this.props.posts)
          .filter(post => !post.deleted)
          .map(post =>

            <article className="post">
              <h2>{ post.title }</h2>
              <p className="post-content">
                { post.body }
              </p>
              <p className="post-meta">
                { post.timestamp } ({ post.voteScore } points)- <a href="#">Downvote</a> - <a href="#">Upvote</a> - <a href="#">View Post</a>
              </p>
            </article>)
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexView)
