import React from 'react';
import renderer from 'react-test-renderer';
import SignupButton from './index';

test('snapshot test', () => {
  const wrapper = renderer.create(<SignupButton />);
  expect(wrapper).toMatchSnapshot();
});
