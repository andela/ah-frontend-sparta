import React from 'react';
import renderer from 'react-test-renderer';
import TestComponent from '../TestComponent';

describe('private componet', () => {
  it('should render successfully', () => {
    const props = {
      isLoggedIn: true,
    };
    const wrapper = renderer.create(
      <TestComponent isLoggedIn={props.isLoggedIn} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
