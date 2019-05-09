import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import store from '../../../store';
import { Landing } from '../index';

describe('Landing page', () => {
  const props = {
    articles: [],
    getArticles: jest.fn(),
  };
  let instance;
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Landing {...props} />
      </Provider>,
    );
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('componentDidMount Method Called', () => {
    const spy = jest.spyOn(Landing.prototype, 'componentDidMount');
    mount(<Landing {...props} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
