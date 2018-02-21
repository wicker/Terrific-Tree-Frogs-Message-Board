import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories, updateSorting } from '../actions'

class Sidebar extends Component {

  componentWillMount () {
    this.props.updateCats();
    this.props.updateSortBy();
  }

  render() {
    return (
      <aside id="sidebar">
          <ul className="add-post">
            <li><a href="/add">Add a Post</a></li>
          </ul>
        <h1>Sort by</h1>
        <ul>
          <li><a href="/">Date</a></li>
          <li><a href="/">Votes</a></li>
        </ul>
        <h1>Categories</h1>
        <ul>

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
  sorting: state.sorting,
  categories: state.categories
})

const mapDispatchToProps = dispatch => ({
  dispatch,
  updateCats: () => dispatch(getCategories()),
  updateSortBy: (sorting) => dispatch(updateSorting(sorting))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
