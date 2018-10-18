import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, getAllPosts, voteOnPost, deletePost } from '../actions';
import SortBy from './SortBy.js';

class CategoryView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cat: '',
    }
  }

  componentDidMount () {
    this.props.updateCats();
    this.props.updatePosts();
  }

  render () {
    return (

      <section id="content">

        {Object.values(this.props.categories)
          .filter(category => category.path === this.props.cat)
          .map(category =>
            <div key={ category.name }>
              <h2>Posts in <u>{category.name}</u></h2>
              <SortBy />
            </div>
          )
        }

        {Object.values(this.props.posts)
          .filter(post => post.category === this.props.cat)
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
  sorting: state.sorting,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  updatePosts: () => dispatch(getAllPosts()),
  vote: (postID, voteString) =>
    dispatch(voteOnPost(postID, voteString)),
  removePost: (postID) =>
    dispatch(deletePost(postID)),
  updateCats: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryView);
