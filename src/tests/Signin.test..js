import React from 'react';
import renderer from 'react-test-renderer';
import Signin from '../pages/Signin';

describe('Signin Page', () => {
  it('should render without crashing', () => {
    const wrapper = renderer.create(<Signin />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
