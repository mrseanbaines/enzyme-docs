import React, { Fragment } from 'react';

const Foo = ({ onButtonClick }) => (
  <Fragment>
    <h1>Foo</h1>
    <button onClick={onButtonClick}>Click</button>
  </Fragment>
);

export default Foo;
