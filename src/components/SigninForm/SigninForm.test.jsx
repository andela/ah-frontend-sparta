import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Signin from './index';
import store from '../../store';

jest.mock('react-router-dom');
test('snapshot test', () => {
  const wrapper = renderer.create(
    <Provider store={store}>
      <Signin />
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
