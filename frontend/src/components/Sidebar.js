import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories, updateSorting } from '../actions'

class Sidebar extends Component {

  componentWillMount () {
    this.props.updateCats();
  }

  render() {
    return (
      <aside id="sidebar">
          <ul className="add-post">
            <li><a href="/add">Add a Post</a></li>
          </ul>
        <h1>Sort by</h1>
        <ul>
          <li><button onClick={() => this.props.updateSortBy('date')}>Date</button></li>
          <li><button onClick={() => this.props.updateSortBy('voteScore')}>Votes</button></li>
        </ul>
        <h1>Categories</h1>
        <ul>

        <li key='all'><a href={"/"}>All Posts</a></li>
        {Object.values(this.props.categories)
          .map(category =>
            <li key={ category.path }><a href={"/category/" + category.path }>{ category.name }</a></li>
          )
        }

        </ul>
      </aside>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  updateCats: () => dispatch(getCategories()),
  updateSortBy: (sorting) => dispatch(updateSorting(sorting))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
