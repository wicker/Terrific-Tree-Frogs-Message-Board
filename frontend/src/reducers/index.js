import {combineReducers} from 'redux'
import {
  GET_CATEGORIES,
  GET_ALL_POSTS,
  GET_POST_COMMENTS
} from '../actions'

/* Reducer specifies the shape of the store */

function categories (state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

function posts (state = {}, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return action.posts.filter(post => !post.deleted)
    default:
      return state
  }
}

function comments (state = {}, action) {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return action.comments.filter(comment => !comment.deleted)
    default:
      return state
  }
}

export default combineReducers({categories, posts, comments})
