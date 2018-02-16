import React, { Component } from 'react';
import { withRouter } from 'react-router'

class CategoryView extends Component {

  render () {
    return (

      <section id="content">
        <h1>{ this.props.match.params.category }</h1>
      </section>

    )
  }

}

export default withRouter(CategoryView)
