import React, { Component, Fragment } from 'react';
import Foo from './Foo';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Foo />
        <Foo />
        <Foo />
        <div className="icon-star">⭐️</div>
        {this.props.children}
      </Fragment>
    );
  }
}

export default App;
