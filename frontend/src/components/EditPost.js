import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts, getAPost, editPost } from '../actions';

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
      refPost: {},
      is404: ''
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
    };

    this.props.editPost(editedPost);

    this.setState({ redirect: true });
  }

  componentDidMount() {
    this.props.updatePosts()
      .then(() => this.setState({ isLoaded: true }))
      .then(() => this.checkPostExistence())
      .then(() =>
        this.setState({
          refPost: this.props.posts.filter(post => post.id === this.state.id),
        }))
      .then(() =>
        this.setState({
          title: this.state.refPost[0].title,
          body: this.state.refPost[0].body,
          category: this.state.refPost[0].category,
          author: this.state.refPost[0].author,
          voteScore: this.state.refPost[0].voteScore,
          timestamp: this.state.refPost[0].timestamp
        }))
      .then(() => console.log('test'))
  }

  checkPostExistence() {
    const postResult = Object.values(this.props.posts)
      .filter(post => post.id === this.props.match.params.post_id);

    if (postResult.length === 0) {
      this.setState({ is404: true });
    } else {
      this.setState({ is404: false });
    }
  }

  render () {

    if (this.state.redirect) {
      return (<Redirect to={'/' + this.state.category + '/' + this.state.id} />);
    } else if (!this.state.isLoaded) {
      return ('')
    } else if (this.state.is404) {
      return (<Redirect to="/404" />)
    } else {

      return (

        <section id="content">

          <h2>Edit Post</h2>

          <form className="centered" onSubmit={this.handleSubmit}>
            <label>
              <span className="label-box">Title:</span>
              <input  name="title" type="text" value={this.state.title} onChange={this.handleChange} />
            </label>
            <label>
              <span className="label-box">Author:</span>
              <input  name="author" type="text" value={this.state.author} onChange={this.handleChange} />
            </label>
            <label>
              <span className="label-box">Category:</span>
              <select  name="category" value={this.state.category} onChange={this.handleChange}>
                <option  value="frogs">Frogs</option>
                <option  value="not-frogs">Not Frogs</option>
              </select>
            </label>
            <label>
              <span className="label-box">Body:</span><br />
              <textarea className="large-input" maxlength="180" name="body" type="text" value={this.state.body} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>

        </section>
      );
    }
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  updatePosts: () => dispatch(getAllPosts()),
  updatePost: (postID) => dispatch(getAPost(postID)),
  editPost: (editedPost) => dispatch(editPost(editedPost))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
