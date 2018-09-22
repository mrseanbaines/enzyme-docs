import React, { Component, Fragment } from 'react';
import Foo from './Foo';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Foo />
        <Foo />
        <Foo />
        <span role="img" aria-label="star icon" className="icon-star">⭐️</span>
        {this.props.children}
      </Fragment>
    );
  }
}

export default App;
