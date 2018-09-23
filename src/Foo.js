import React, { Component } from 'react';

class Foo extends Component {
  componentDidMount() {}

  render() {
    return (
      <div id="foo">
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onButtonClick}>Click</button>
        <div className="foo-bar">foo bar</div>
        <div className="foo-bar">foo bar</div>
        <div className="foo-bar">foo bar</div>
        <a className="foo bar" href="https://www.example.com">Link</a>
      </div>
    );
  }
}

export default Foo;
