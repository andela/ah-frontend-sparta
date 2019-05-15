import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../store';
import App from '../components/App/index';

describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
