import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllPosts, voteOnPost } from '../actions'
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

           .map(post =>

             <article className="post" key={ post.id }>
               <h2>{ post.title }</h2>
               <p className="post-content">
                 { post.body }
               </p>
               <p className="post-meta">
                 <span>{ new Date(post.timestamp).toDateString() }</span>
                 <span>({ post.voteScore } points)</span>
                 <button onClick={() => this.props.vote(post.id, 'downVote')}>Downvote</button>
                 <button onClick={() => this.props.vote(post.id, 'upVote')}>Upvote</button>
                 <span><a href={"/post/" + post.id }>View Post</a></span>
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
    dispatch(voteOnPost(postID, voteString))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView)
