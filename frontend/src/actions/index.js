import * as ReadableAPI from '../utils/ReadableAPI.js';

import {
  UPDATE_SORTING,
  GET_CATEGORIES,
  GET_ALL_POSTS,
  GET_POST_COMMENTS
} from './types';

export const updateSorting = sorting => ({
  type: UPDATE_SORTING,
  sorting
});

export const updateCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const getCategories = () => dispatch =>
  ReadableAPI.getCategories()
    .then(categories => dispatch(updateCategories(categories)));

export const updatePosts = posts => ({
  type: GET_ALL_POSTS,
  posts
});

export const getAllPosts = () => dispatch =>
  ReadableAPI.getPosts().then(posts =>
    Promise.all(posts.map(post =>
      ReadableAPI.getComments(post.id)
        .then(comments => post.comments = comments)
        .then(() => post.commentCount = post.comments.length)
        .then(() => post))
    ).then(posts => dispatch(updatePosts(posts)))
  );

export const getAPost = (postID) => dispatch =>
  ReadableAPI.getPostByID(postID)
    .then(post => dispatch(updatePosts(post)));

export const voteOnPost = (postID, voteString) => dispatch =>
  ReadableAPI.voteOnAPost(postID, voteString)
    .then(() => dispatch(getAllPosts()));

export const voteOnComment = (commentID, voteString) => dispatch =>
  ReadableAPI.voteOnAComment(commentID, voteString)
    .then(() => dispatch(getComments()));

export const addPost = (newPost) => dispatch =>
  ReadableAPI.addPost(newPost)
    .then(() => dispatch(getAllPosts()));

export const editPost = (post) => dispatch =>
  ReadableAPI.editPost(post)
    .then(() => dispatch(getAllPosts()));

export const deletePost = (postID) => dispatch =>
  ReadableAPI.deletePost(postID)
    .then(() => dispatch(getAllPosts()));

export const updateComments = comments => ({
  type: GET_POST_COMMENTS,
  comments
});

export const getComments = (postID) => dispatch =>
  ReadableAPI.getComments(postID)
    .then(comments => dispatch(updateComments(comments)))
    .then(() => dispatch(getAllPosts()));

export const addComment = (newComment) => dispatch =>
  ReadableAPI.addComment(newComment)
    .then(() => dispatch(getComments(newComment.parentId)));

export const editComment = (comment) => dispatch =>
  ReadableAPI.editComment(comment)
    .then(() => dispatch(getComments(comment.parentId)));

export const deleteComment = (comment) => dispatch =>
  ReadableAPI.deleteComment(comment.id)
    .then(() => dispatch(getComments(comment.parentId)));


