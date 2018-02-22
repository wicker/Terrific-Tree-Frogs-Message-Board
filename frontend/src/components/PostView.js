import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
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
      body: '',
      author: '',
      parentId: this.props.match.params.post_id,
      redirect: false
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

    this.setState({
      body: '',
      author: '',
      redirect: false
    });

    this.props.addComment(newComment);

  }

  removeAPost(post_id) {
    this.setState({redirect: true});
    this.props.removePost(post_id);
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/" />)
    } else {

      return (

        <section id="content">

          <article className="post">

             {Object.values(this.props.posts)
               .filter(post => post.id === this.props.match.params.post_id)

               .map(post =>
                 <div key={ post.id } className="post-wrapper">
                  <h2>{ post.title }</h2>
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
                      <button onClick={() => this.removeAPost(post.id)}>Delete</button>
                    </span>
                    <span className="post-author">
                      { new Date(post.timestamp).toLocaleDateString('en-US') } by { post.author }<br />
                    </span>
                  </p>
                </div>)
             }
             <div className="post-wrapper">
               <h2>Comments</h2>
               { this.props.comments.length !== 0
                 ? Object.values(this.props.comments)
                   .map(comment =>
                     <div key={ comment.id }>
                       <p className="post-content">
                         { comment.body }
                       </p>
                       <p className="post-meta">
                         <span className="post-link">
                           <a href={"/post/" + comment.parentId + "/" + comment.id + "/edit"}>Edit</a> &nbsp;
                           <button onClick={() => this.props.removeComment(comment)}>Delete</button>
                         </span>
                         <span className="post-author">
                           Comment posted { new Date(comment.timestamp).toLocaleDateString('en-US') } by { comment.author }<br />
                         </span>
                       </p>
                    </div>
                  )
                : <div className="post-content">There are no comments yet.</div>
               }
             </div>

             <div className="post-wrapper">

               <h2>Add a Comment</h2>

               <form className="add-comment" onSubmit={this.handleSubmit}>
                 <label>
                   Author:
                   <input name="author" type="text" value={this.state.author} onChange={this.handleChange} />
                 </label><br /><br />
                 <label>
                   Body:
                   <input name="body" type="text" value={this.state.body} onChange={this.handleChange} />
                 </label><br /><br />
                 <input type="submit" value="Submit" />
               </form>

             </div>

          </article>

        </section>
      )
    }
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
  removeComment: (comment) =>
    dispatch(deleteComment(comment)),
  addComment: (newComment) =>
    dispatch(addComment(newComment))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostView)
