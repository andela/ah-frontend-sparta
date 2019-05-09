import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import store from '../../../store';
import { Dashboard } from '../index';

describe('Dashboard Component', () => {
  const props = {
    articles: [],
    getArticles: jest.fn(),
  };
  let instance;
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Dashboard {...props} />
      </Provider>,
    );
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
