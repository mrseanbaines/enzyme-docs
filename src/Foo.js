import React, { Fragment } from 'react';

class Foo extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Foo</h1>
        <button onClick={this.props.onButtonClick}>Click</button>
        <div className="foo-bar">foo bar</div>
        <div className="foo-bar">foo bar</div>
        <div className="foo-bar">foo bar</div>
      </div>
    );
  }
}

export default Foo;
