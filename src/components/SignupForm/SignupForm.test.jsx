import React from 'react';
import renderer from 'react-test-renderer';
import Signup from './index';

jest.mock('react-router-dom');

test('snapshot test', () => {
  const wrapper = renderer.create(<Signup />);
  expect(wrapper).toMatchSnapshot();
});
