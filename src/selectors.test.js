import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';

import App from './App';
import Foo from './Foo';

describe('CSS selectors', () => {
  it('exists!', () => {
    const wrapper = render(<Foo />);
    expect(wrapper.find('.foo.bar')).to.not.have.lengthOf(0);
    expect(wrapper.find('a[href="https://www.example.com"]')).to.not.have.lengthOf(0);
    expect(wrapper.find('#foo .bar')).to.not.have.lengthOf(0);
  });
});

describe('Prop selectors', () => {
  it('exists!', () => {
    const wrapper = shallow(
      <div>
        <span foo={3} bar={false} title="baz" />
      </div>
    );
    expect(wrapper.find('[foo=3]')).to.not.have.lengthOf(0);
    expect(wrapper.find('[bar=false]')).to.not.have.lengthOf(0);
    expect(wrapper.find('[title="baz"]')).to.not.have.lengthOf(0);
  });
});

describe('Component selectors', () => {
  it('exists!', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Foo)).to.not.have.lengthOf(0);
  });
});

describe(`Component's displayName selectors`, () => {
  it('exists!', () => {
    const wrapper = shallow(<App />);
    Foo.displayName = 'MyComponent';
    expect(wrapper.find('MyComponent')).to.not.have.lengthOf(0);
  });
});

describe('Object property selectors', () => {
  it('exists!', () => {
    const wrapper = shallow(
      <div>
        <span foo={3} bar={false} title="baz" />
      </div>
    );
    expect(wrapper.find({ foo: 3 })).to.not.have.lengthOf(0);
    expect(wrapper.find({ bar: false })).to.not.have.lengthOf(0);
    expect(wrapper.find({ title: 'baz' })).to.not.have.lengthOf(0);
  });
});
