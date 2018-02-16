import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { addPost } from '../actions'
const uuidv4 = require('uuid/v4');

class AddPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
      category: 'frogs',
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

    const newPost = {
      id: uuidv4(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
      voteScore: 0,
      deleted: false
    }

    this.props.addPost(newPost);

    this.setState({ redirect: true });
  }

  render () {

    if (this.state.redirect) {
      return (<Redirect to="/" />)
    } else {
      return (
         <section id="content">

           <h2>Add Post</h2>

           <form onSubmit={this.handleSubmit}>
             <label>
               Title:
               <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
             </label>
             <label>
               Author:
               <input name="author" type="text" value={this.state.author} onChange={this.handleChange} />
             </label>
             <label>
               Body:
               <input name="body" type="text" value={this.state.postbody} onChange={this.handleChange} />
             </label>
             <label>
               Category:
               <select name="category" value={this.state.category} onChange={this.handleChange}>
                 <option value="frogs">Frogs</option>
                 <option value="not-frogs">Not Frogs</option>
               </select>
             </label>
             <input type="submit" value="Submit" />
           </form>

         </section>
      )
    }
  }
}

const mapStateToProps = state => ({
   categories: state.categories
 })

const mapDispatchToProps = dispatch => ({
  dispatch,
  addPost: (newPost) =>
    dispatch(addPost(newPost))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
