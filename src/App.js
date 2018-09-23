import React, { Component, Fragment } from 'react';
import Foo from './Foo';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="bar">
          <Foo foo="foo" />
          <Foo foo="bar" />
          <Foo foo="baz" />
        </div>
        <span role="img" aria-label="star icon" className="icon-star">⭐️</span>
        {this.props.children}
        <ul>
          <li>list item 1</li>
          <li>list item 2</li>
          <li>list item 3</li>
        </ul>
      </Fragment>
    );
  }
}

export default App;
