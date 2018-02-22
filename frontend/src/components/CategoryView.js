import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllPosts, voteOnPost, deletePost } from '../actions'
import SortBy from './SortBy.js'

class CategoryView extends Component {

  componentWillMount () {
    this.props.updatePosts();
  }

  render () {
    return (

       <section id="content">

         <SortBy />
         {Object.values(this.props.posts)
           .filter(post => post.category === this.props.match.params.category)
           .sort((post_a, post_b) => {
            if (this.props.sorting === 'date')
              return post_a.timestamp - post_b.timestamp
             else
              return post_a.voteScore - post_b.voteScore
           }).reverse(post => post).map(post =>

            <article className="post" key={ post.id }>
              <h2><a href={"/post/" + post.id }>{ post.title }</a></h2>
              <p className="post-content">
                { post.body }
              </p>
              <p className="post-meta">
                <span className="post-votes">
                  <button className="votebutton downvote"
                    onClick={() => this.props.vote(post.id, 'downVote')}>
                  </button>
                  <span>{ post.voteScore }</span>
                  <button className="votebutton upvote"
                    onClick={() => this.props.vote(post.id, 'upVote')}>
                  </button>
                </span>
                <span className="post-link">
                  <a href={"/post/" + post.id + "/edit"}>Edit</a> &nbsp;
                  <button onClick={() => this.props.removePost(post.id)}>Delete</button>
                  { post.commentCount === 1
                    ? <a href={"/post/" + post.id }>{ post.commentCount } comment</a>
                    : <a href={"/post/" + post.id }>{ post.commentCount } comments</a>
                  }
                </span>
                <span className="post-author">
                  { new Date(post.timestamp).toLocaleDateString('en-US') } by { post.author }<br />
                </span>
              </p>
            </article>)
         }
       </section>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  sorting: state.sorting
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  updatePosts: () => dispatch(getAllPosts()),
  vote: (postID, voteString) =>
    dispatch(voteOnPost(postID, voteString)),
  removePost: (postID) =>
    dispatch(deletePost(postID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)
