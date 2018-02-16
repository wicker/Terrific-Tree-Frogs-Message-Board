import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPosts, voteOnPost, deletePost } from '../actions'

class PostView extends Component {

  componentWillMount () {
    this.props.updatePosts();
  }

  render () {

      return (

         <section id="content">
           {Object.values(this.props.posts)
             .filter(post => post.id === this.props.match.params.post_id)

             .map(post =>

               <article className="post" key="{ post.id }">
                 <h2>{ post.title }</h2>
                 <p className="post-content">
                   { post.body }
                 </p>
                 <p className="post-content">
                   Comments here
                 </p>
                 <p className="post-meta">
                   <span>{ new Date(post.timestamp).toDateString() }</span>
                   <span>({ post.voteScore } points)</span>
                   <button onClick={() => this.props.vote(post.id, 'downVote')}>Downvote</button>
                   <button onClick={() => this.props.vote(post.id, 'upVote')}>Upvote</button>
                   <span><a href={"/post/" + post.id + "/edit"}>Edit Post</a></span>
                   <button onClick={() => this.props.removePost(post.id)}>Delete</button>
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
  updatePosts: () => dispatch(getAllPosts()),
  vote: (postID, voteString) =>
    dispatch(voteOnPost(postID, voteString)),
  removePost: (postID) => {
    dispatch(deletePost(postID));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostView)
