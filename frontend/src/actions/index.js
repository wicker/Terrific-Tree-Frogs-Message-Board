import * as ReadableAPI from '../utils/ReadableAPI.js'

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS'

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

export const voteOnPost = (postID, voteString) => dispatch =>
  ReadableAPI.voteOnAPost(postID, voteString)
    .then(() => dispatch(getAllPosts()))

export const deletePost = (postID) => dispatch =>
  ReadableAPI.deletePost(postID)
    .then(() => dispatch(getAllPosts()))

export const addPost = (post) => dispatch =>
  ReadableAPI.addPost(post)
    .then(() => dispatch(getAllPosts()))

export const editPost = (post) => dispatch =>
  ReadableAPI.editPost(post)
    .then(() => dispatch(getAllPosts()))

export const updateComments = comments => ({
  type: GET_POST_COMMENTS,
  comments
})

export const getComments = (post_id) => dispatch =>
  ReadableAPI.getComments(post_id).then(comments =>
    dispatch(updateComments(comments))
)


