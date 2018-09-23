import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';
import Foo from './Foo';

describe('.at(index)', () => {
  // Returns a wrapper around the node at a given index of the current wrapper.
  it('works!', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Foo).at(1).props().foo).to.equal('bar');
  });
});
