
const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'whatever-you-want',
  'Content-Type': 'application/json'
}

export const getCategories = () =>
  fetch (`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPosts = () =>
  fetch (`${api}/posts`, { headers })
    .then(res => res.json())

export const getPostsByCategory = (category) =>
  fetch (`${api}/${category}/posts`, { headers })
    .then(res => res.json())

export const addPost = (post) =>
  fetch (`${api}/posts/`,
      { method: 'POST',
        headers,
        body: JSON.stringify(post)
      })
  .then(data => data.json())

export const getPostByID = (post_id) =>
  fetch (`${api}/posts/${post_id}`, { headers })
    .then(res => res.json())

export const voteOnAPost = (post_id, vote) =>
  fetch (`${api}/posts/${post_id}`,
      { method: 'POST',
        headers,
        body: JSON.stringify({ option: vote })
      })
  .then(data => data.json())

export const editPost = (post_id, title, body) =>
  fetch (`${api}/posts/${post_id}`,
      { method: 'PUT',
        headers,
        body: JSON.stringify({
          title: title,
          body: body
        })
      })
  .then(data => data.json())

export const deletePost = (post_id) =>
  fetch (`${api}/posts/${post_id}`,
      { method: 'DELETE',
        headers
      })
  .then(data => data.json())

