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

describe('.childAt(index)', () => {
  // Returns a new wrapper with child at the specified index.
  it('works!', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('ul').childAt(0).type()).to.equal('li');
  });
});

describe('.children([selector])', () => {
  // Returns a new wrapper with all of the children of the node(s) in the current wrapper.
  // Optionally, a selector can be provided and it will filter the children by this selector.
  it('works!', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('ul').children()).to.have.lengthOf(3);
  });
});

describe('.closest(selector) ', () => {
  // Returns a wrapper of the first element that matches the selector by traversing
  // up through the current node's ancestors in the tree, starting with itself.
  // Note: can only be called on a wrapper of a single node.
  it('works!', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Foo).at(0).closest('.bar')).to.have.lengthOf(1);
  });
});
