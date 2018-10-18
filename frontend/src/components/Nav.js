import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, updateSorting } from '../actions';

class Nav extends Component {

  componentDidMount () {
    this.props.updateCats();
  }

  render() {
    return (
      <aside id="nav">
        <div className="wrapper">
          <ul className="nav-add-post">
            <li key='add'><a href="/add">Add a Post</a></li>
          </ul>
          <ul className="nav-sort-posts">
            <li key='all'><a href={'/'}>All Posts</a></li>
            {Object.values(this.props.categories)
              .map(category =>
                <li key={ category.path }><a href={'/' + category.path }>{ category.name }</a></li>
              )
            }
          </ul>
        </div>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  updateCats: () => dispatch(getCategories()),
  updateSortBy: (sorting) => dispatch(updateSorting(sorting))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
