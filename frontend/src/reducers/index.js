import {combineReducers} from 'redux';

import {
  UPDATE_SORTING,
  GET_CATEGORIES,
  GET_ALL_POSTS,
  GET_POST_COMMENTS
} from '../actions/types';

function sorting (state = 'date' , action) {
  switch (action.type) {
  case UPDATE_SORTING:
    return action.sorting;
  default:
    return state;
  }
}

function categories (state = {}, action) {
  switch (action.type) {
  case GET_CATEGORIES:
    return action.categories;
  default:
    return state;
  }
}

function posts (state = {}, action) {
  switch (action.type) {
  case GET_ALL_POSTS:
    return action.posts.filter(post => !post.deleted);
  default:
    return state;
  }
}

function comments (state = {}, action) {

  switch (action.type) {
  case GET_POST_COMMENTS:
    return action.comments.filter(comment => !comment.deleted);
  default:
    return state;
  }
}

export default combineReducers({categories, posts, comments, sorting});
