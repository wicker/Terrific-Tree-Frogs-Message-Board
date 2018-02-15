import {combineReducers} from 'redux'
import {
  GET_CATEGORIES
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

export default combineReducers({categories})
