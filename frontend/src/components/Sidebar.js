import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions'

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
          <li><a href="/">Date</a></li>
          <li><a href="/">Votes</a></li>
        </ul>
        <h1>Categories</h1>
        <ul>
          <li><a href="/category">Frogs</a></li>
          <li><a href="/category">Not Frogs</a></li>
        </ul>
      </aside>
    )
  }
}

const mapStateToProps = state => ({
   categories: state.categories
 })

const mapDispatchToProps = dispatch => ({
  dispatch,
  updateCats: () => dispatch(getCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
