import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllPosts, getAPost, getComments, editComment } from '../actions'

class EditComment extends Component {

  constructor(props) {

    super(props);

    this.state = {
      id: this.props.match.params.comment_id,
      timestamp: '',
      body: '',
      author: '',
      parentId: this.props.match.params.post_id,
      redirect: false,
      refComment: {}
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

    const editedComment = {
      id: this.state.id,
      timestamp: this.state.timestamp,
      body: this.state.body,
      author: this.state.author,

    }

    this.props.editComment(editedComment);

    this.setState({ redirect: true });
  }

  componentWillMount() {
    this.props.updatePosts();
    this.props.updateComments(this.props.match.params.comment_id)
      .then(() =>
        this.setState({
          refComment: this.props.comments.filter(comment => comment.id === this.state.id),
        })
      ).then(() =>
        this.setState({
          body: this.state.refComment[0].body,
          author: this.state.refComment[0].author,
          timestamp: this.state.refComment[0].timestamp
        })
      )
    console.log(this.props.comments, this.props.match.params.comment_id)
    console.log(this.state)
  }

  render () {
    return (

       <section id="content">

         <h2>Edit Comment</h2>

					<form  onSubmit={this.handleSubmit}>
						<label>
							Author:
							<input  name="author" type="text" value={this.state.author} onChange={this.handleChange} />
						</label>
						<label>
							Body:
							<input  name="body" type="text" value={this.state.body} onChange={this.handleChange} />
						</label>
						<input  type="submit" value="Submit" />
					</form>

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
  updatePost: (postID) => dispatch(getAPost(postID)),
  editComment: (editedComment) => dispatch(editComment(editedComment))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditComment)
