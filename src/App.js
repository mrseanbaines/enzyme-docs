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
      </Fragment>
    );
  }
}

export default App;
