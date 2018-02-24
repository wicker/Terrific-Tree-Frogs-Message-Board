export const fetchPosts = () =>
  fetch('http://localhost:3001/posts', {
    headers: { Authorization: 'whatever-you-want' }
  }).then(data => data.json());
