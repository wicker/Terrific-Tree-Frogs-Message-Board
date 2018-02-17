import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPosts, voteOnPost, deletePost, getComments, deleteComment } from '../actions'

class PostView extends Component {

  componentWillMount () {
    this.props.updatePosts();
    this.props.updateComments(this.props.match.params.post_id);
  }

  render () {

    return (

      <section id="content">

        <article className="post">

           {Object.values(this.props.posts)
             .filter(post => post.id === this.props.match.params.post_id)

             .map(post =>
               <div key="{ post.id }">
                 <h2>{ post.title }</h2>
                 <p className="post-content">
                   { post.body }
                 </p>
                 <p className="post-meta">
                   <span>{ new Date(post.timestamp).toDateString() }</span>
                   <span>({ post.voteScore } points)</span>
                   <button onClick={() => this.props.vote(post.id, 'downVote')}>Downvote</button>
                   <button onClick={() => this.props.vote(post.id, 'upVote')}>Upvote</button>
                   <span><a href={"/post/" + post.id + "/edit"}>Edit Post</a></span>
                   <button onClick={() => this.props.removePost(post.id)}>Delete</button>
                 </p>
               </div>)
           }
           <div><h2>Comments</h2></div>
           {Object.values(this.props.comments)
             .map(comment =>
               <div key="{ comment.id }">
                 <p className="post-content">
                   { comment.body }
                 </p>
                 <p className="post-meta">
                   <span>{ new Date(comment.timestamp).toDateString() }</span>
                   <span>({ comment.author })</span>
                   <button onClick={() => this.props.removeComment(comment.id)}>Delete</button>
                 </p>
              </div>
            )
          }



        </article>

      </section>
    )
  }
}

const mapStateToProps = state => ({
   posts: state.posts,
   comments: state.comments
 })

const mapDispatchToProps = dispatch => ({
  dispatch,
  updatePosts: () => dispatch(getAllPosts()),
  updateComments: (postID) => dispatch(getComments(postID)),
  vote: (postID, voteString) =>
    dispatch(voteOnPost(postID, voteString)),
  removePost: (postID) =>
    dispatch(deletePost(postID)),
  removeComment: (commentID) =>
    dispatch(deleteComment(commentID))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostView)
