import React from 'react';
import renderer from 'react-test-renderer';
import Signin from './index';

jest.mock('react-router-dom');
test('snapshot test', () => {
  const wrapper = renderer.create(<Signin />);
  expect(wrapper).toMatchSnapshot();
});
