import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import Foo from './Foo';

describe('CSS selectors', () => {
  it('exists!', () => {
    const wrapper = render(<Foo />);
    expect(wrapper.find('.foo.bar')).to.not.have.lengthOf(0);
    expect(wrapper.find('a[href="https://www.example.com"]')).to.not.have.lengthOf(0);
    expect(wrapper.find('#foo .bar')).to.not.have.lengthOf(0);
  });
});
