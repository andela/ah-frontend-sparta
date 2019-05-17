import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Articles } from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  articlesReducer:
    { error: undefined, article: undefined, articles: [] },
};
const store = mockStore(initialState);


describe('Articles Page Component', () => {
  let mountApp;
  it('Should render without crashing', () => {
    const props = {
      handleChange: jest.fn(),
      addArticle: jest.fn(),
    };
    mountApp = mount(
      <Router>
        <Provider store={store}>
          <Articles {...props} />
        </Provider>
      </Router>,
    );
    expect(mountApp).toMatchSnapshot();
  });

  it('should call an onChange function', () => {
    const props = {
      addArticle: jest.fn(),
    };
    const event = {
      preventDefault: () => {},
      target: {
        name: 'body',
        value: 'abc',
      },
    };
    const wrapper = mount(
      <Articles {...props} />,
    );
    const bodyInput = wrapper.find('#description').first();
    bodyInput.simulate('change', event);
    expect(event.target.value).toEqual('abc');
  });

  it('should call a submit a form', () => {
    const props = {
      addArticle: jest.fn(),
    };
    const wrapper = mount(
      <Articles {...props} />,
    );
    const instance = wrapper.instance();
    instance.onSubmit({ preventDefault: jest.fn() });
    expect(props.addArticle).toHaveBeenCalled();
  });
});
