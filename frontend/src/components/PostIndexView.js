import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts, voteOnPost, deletePost } from '../actions';
import SortBy from './SortBy.js';

class PostIndexView extends Component {

  componentDidMount () {
    this.props.updatePosts();
  }

  render () {

    return (

      <section id="content">
        <h2>All Posts</h2>
        <SortBy />
        {Object.values(this.props.posts)
          .sort((post_a, post_b) => {
            if (this.props.sorting === 'date')
              return post_a.timestamp - post_b.timestamp;
            else
              return post_a.voteScore - post_b.voteScore;
          }).reverse(post => post).map(post =>

            <article className="post" key={ post.id }>
              <h2><a href={'/' + post.category + '/' + post.id }>{ post.title }</a></h2>
              <p className="post-meta">
                <span className="post-author">
          Posted on { new Date(post.timestamp).toLocaleDateString('en-US') } by { post.author }
                </span>
              </p>
              <p className="post-content">
                { post.body }
              </p>
              <p className="post-meta">
                <span className="post-votes">
                  <button className="vote-button downvote"
                    onClick={() => this.props.vote(post.id, 'downVote')}>
                  </button>
                  <span>{ post.voteScore }</span>
                  <button className="vote-button upvote"
                    onClick={() => this.props.vote(post.id, 'upVote')}>
                  </button>
                </span>
                <a href={'/' + post.category + '/' + post.id + '/edit'}>Edit</a> &nbsp;
                <button onClick={() => this.props.removePost(post.id)}>Delete</button>
        &nbsp; &nbsp;
                { post.commentCount === 1
                  ? <a href={'/' + post.category + '/' + post.id }>{ post.commentCount } comment</a>
                  : <a href={'/' + post.category + '/' + post.id }>{ post.commentCount } comments</a>
                }
              </p>
            </article>)
        }
      </section>

    );
  }

}

const mapStateToProps = state => ({
  posts: state.posts,
  sorting: state.sorting
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  updatePosts: () => dispatch(getAllPosts()),
  vote: (postID, voteString) =>
    dispatch(voteOnPost(postID, voteString)),
  removePost: (postID) =>
    dispatch(deletePost(postID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexView);
