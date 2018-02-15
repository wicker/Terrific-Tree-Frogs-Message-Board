import * as ReadableAPI from '../utils/ReadableAPI.js'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const updateCategories = categories => ({
  type: GET_CATEGORIES,
  categories
})

export const getCategories = () => dispatch =>
  ReadableAPI.getCategories().then(categories =>
    dispatch(updateCategories(categories))
)
