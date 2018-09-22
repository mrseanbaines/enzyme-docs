import React, { Fragment } from 'react';

class Foo extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <h1>Foo</h1>
        <button onClick={this.props.onButtonClick}>Click</button>
      </Fragment>
    );
  }
}

export default Foo;
