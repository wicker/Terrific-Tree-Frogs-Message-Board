import * as ReadableAPI from '../utils/ReadableAPI.js'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'

export const updateCategories = categories => ({
  type: GET_CATEGORIES,
  categories
})

export const getCategories = () => dispatch =>
  ReadableAPI.getCategories().then(categories =>
    dispatch(updateCategories(categories))
)

export const updatePosts = posts => ({
  type: GET_ALL_POSTS,
  posts
})

export const getAllPosts = () => dispatch =>
  ReadableAPI.getPosts().then(posts =>
    dispatch(updatePosts(posts))
)

