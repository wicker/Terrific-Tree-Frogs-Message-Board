import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPosts, voteOnPost, deletePost, getComments, deleteComment, addComment} from '../actions'
const uuidv4 = require('uuid/v4');

class PostView extends Component {

  componentWillMount () {
    this.props.updatePosts();
    this.props.updateComments(this.props.match.params.post_id);
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
      parentId: this.props.match.params.post_id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const newComment = {
      id: uuidv4(),
      parentId: this.state.parentId,
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      voteScore: 0,
      deleted: false
    }

    this.props.addComment(newComment);

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
           { this.props.comments.length !== 0
             ? Object.values(this.props.comments)
               .map(comment =>
                 <div key="{ comment.id }">
                   <p className="post-content">
                     { comment.body }
                   </p>
                   <p className="post-meta">
                     <span>{ new Date(comment.timestamp).toDateString() }</span>
                     <span>({ comment.author })</span>
                     <span><a href={"/post/" + comment.parentId + "/" + comment.id + "/edit"}>Edit Comment</a></span>
                     <button onClick={() => this.props.removeComment(comment.id)}>Delete</button>
                   </p>
                </div>
              )
            : <div>There are no comments yet.</div>
           }

           <div><h2>Add a Comment</h2></div>

           <form onSubmit={this.handleSubmit}>
             <label>
               Author:
               <input name="author" type="text" value={this.state.author} onChange={this.handleChange} />
             </label>
             <label>
               Body:
               <input name="body" type="text" value={this.state.postbody} onChange={this.handleChange} />
             </label>
             <input type="submit" value="Submit" />
           </form>

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
    dispatch(deleteComment(commentID)),
  addComment: (newComment) =>
    dispatch(addComment(newComment))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostView)
