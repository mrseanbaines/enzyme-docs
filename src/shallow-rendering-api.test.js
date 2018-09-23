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
