import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { getAllPosts, getAPost, editPost } from '../actions'

class EditPost extends Component {

  constructor(props) {

    super(props);

    this.state = {
      id: this.props.match.params.post_id,
      timestamp: '',
      title: '',
      body: '',
      author: '',
      category: '',
      voteScore: '',
      redirect: false,
      refPost: {}
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

    const editedPost = {
      id: this.state.id,
      timestamp: this.state.timestamp,
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
      voteScore: this.state.voteScore
    }

    this.props.editPost(editedPost);

    this.setState({ redirect: true });
  }

  componentWillMount() {
    this.props.updatePosts()
      .then(() =>
        this.setState({
          refPost: this.props.posts.filter(post => post.id === this.state.id),
        })
      ).then(() =>
        this.setState({
          title: this.state.refPost[0].title,
          body: this.state.refPost[0].body,
          category: this.state.refPost[0].category,
          author: this.state.refPost[0].author,
          voteScore: this.state.refPost[0].voteScore,
          timestamp: this.state.refPost[0].timestamp
        })
      )
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to={'/' + this.state.category + '/' + this.state.id} />)
    } else {
      return (

         <section id="content">

           <h2>Edit Post</h2>

            <form  onSubmit={this.handleSubmit}>
              <label>
                Title:
                <input  name="title" type="text" value={this.state.title} onChange={this.handleChange} />
              </label>
              <label>
                Author:
                <input  name="author" type="text" value={this.state.author} onChange={this.handleChange} />
              </label>
              <label>
                Body:
                <input  name="body" type="text" value={this.state.body} onChange={this.handleChange} />
              </label>
              <label>
                Category:
                <select  name="category" value={this.state.category} onChange={this.handleChange}>
                  <option  value="frogs">Frogs</option>
                  <option  value="not-frogs">Not Frogs</option>
                </select>
              </label>
              <input  type="submit" value="Submit" />
            </form>

         </section>
      )
    }
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  updatePosts: () => dispatch(getAllPosts()),
  updatePost: (postID) => dispatch(getAPost(postID)),
  editPost: (editedPost) => dispatch(editPost(editedPost))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
