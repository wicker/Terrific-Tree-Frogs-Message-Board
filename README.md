# MyReads

This React/Redux app is a message board allowing anonymous users to post, edit, remove, and comment. It was created using [Create React App](https://github.com/facebookincubator/create-react-app) and depends on the Udacity backend in [reactnd-project-readable-starter](https://github.com/udacity/reactnd-project-readable-starter). It's the second project for the [Udacity React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019).

# Usage

Clone the repository.

```
git clone https://github.com/wicker/Readable.git
```

Install project dependencies and start the dev server.

```
npm install
npm start
```

# User Interface

There are four views. 

The main page lists all posts and all categories with links to the appropriate category view. It also allows the user to add a post and sort the list of posts by timestamp or vote score. 

The category view shows a filtered list of posts belonging to that category.

The post view shows the post metadata, the post itself, associated comments with the ability to edit/remove comments, and a comment box allowing the user to add a new comment.

The create/edit view allows a user to create or a edit posts.

# Screenshots

None yet

# Design Notes

The app is wrapped in a Provider.

The overall structure of the app:

```
in progress
```

The structure of the Redux store:

```
in progress
```

Backend calls. Was: the [BooksAPI](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/src/BooksAPI.js) calls available are:

```
get(bookid)
getAll()
update(book, shelf)
search(query)
```

The post object includes:

|attribute|type|
|---------|----|
|id|string|
|timestamp|integer|
|title|string|
|body|string|
|author|string|
|category|string|
|voteScore|integer|
|deleted|boolean|

The comment object includes: 

|attribute|type|
|---------|----|
|id|string|
|parentid|string|
|timestamp|integer|
|body|string|
|author|string|
|voteScore|integer|
|deleted|boolean|
|parentDeleted|boolean|
