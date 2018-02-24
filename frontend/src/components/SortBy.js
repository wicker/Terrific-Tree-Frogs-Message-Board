import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSorting } from '../actions';

class SortBy extends Component {

  render() {
    return (
      <div className="sortbar">
        <h3>Sort posts by: </h3>
        <button onClick={() => this.props.updateSortBy('date')}>Date</button>
        &nbsp;
        <button onClick={() => this.props.updateSortBy('voteScore')}>Votes</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sorting: state.sorting
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  updateSortBy: (sorting) => dispatch(updateSorting(sorting))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);
