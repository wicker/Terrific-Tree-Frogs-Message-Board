import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addPost } from '../actions'

class AddPost extends Component {

  render () {
    return (

       <section id="content">

         <h2>Add Post</h2>

       </section>
    )
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
