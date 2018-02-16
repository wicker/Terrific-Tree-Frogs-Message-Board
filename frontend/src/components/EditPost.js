import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editPost } from '../actions'

class EditPost extends Component {

  render () {
    return (

       <section id="content">

         <h2>Edit Post</h2>

       </section>
    )
  }
}

const mapStateToProps = state => ({
   posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  editPost: (editedPost) =>
    dispatch(editPost(editedPost))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
