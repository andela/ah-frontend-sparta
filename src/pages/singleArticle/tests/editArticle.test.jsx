import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { EditArticle } from '../EditArticle';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  articlesReducer:
        { error: undefined, article: undefined, articles: [] },
};
const store = mockStore(initialState);


describe('Edit Article Page Component', () => {
  let mountApp;
  it('Should render without crashing', () => {
    const props = {
      handleChange: jest.fn(),
      getArticle: jest.fn(),
      updateArticle: jest.fn(),
      match: {
        params: {
          slug: 'new-slug',
        },
      },
    };
    mountApp = mount(
      <Router>
        <Provider store={store}>
          <EditArticle {...props} />
        </Provider>
      </Router>,
    );
    expect(mountApp).toMatchSnapshot();
  });

  it('componentWillReceiveProps', () => {
    const props = {
      handleChange: jest.fn(),
      getArticle: jest.fn(),
      updateArticle: jest.fn(),
      match: {
        params: {
          slug: 'new-slug',
        },
      },
    };
    const wrapper = shallow(<EditArticle {...props} />);
    wrapper.instance().setState = jest.fn();
    wrapper.setProps({
      article: {
        article: {
          id: 23,
          author: {
            username: 'Daniel Roy',
            firstname: null,
            lastname: null,
            bio: null,
            image: null,
            followers_no: 0,
            following_no: 0,
          },
          article_read_time: '4 minute read',
          favorite: [],
          title: 'The Valley in the darkness',
          description: 'A short story by Danny',
          slug: 'the-valley-in-the-darkness-22',
          body: 'come on',
          tags: [
            'technology',
            'Andela',
          ],
        },
      },
    });
    expect(wrapper.instance().setState).toBeCalled();
  });

  it('should call an onChange function', () => {
    const props = {
      updateArticle: jest.fn(),
      getArticle: jest.fn(),
      match: {
        params: {
          slug: 'new-slug',
        },
      },
    };
    const event = {
      preventDefault: () => { },
      target: {
        name: 'body',
        value: 'abc',
      },
    };
    const wrapper = mount(
      <EditArticle {...props} />,
    );
    const bodyInput = wrapper.find('#description').first();
    bodyInput.simulate('change', event);
    expect(event.target.value).toEqual('abc');
  });

  it('should call a submit a form', () => {
    const props = {
      updateArticle: jest.fn(),
      getArticle: jest.fn(),
      match: {
        params: {
          slug: 'new-slug',
        },
      },
    };
    const wrapper = mount(
      <EditArticle {...props} />,
    );
    const instance = wrapper.instance();
    instance.onSubmit({ preventDefault: jest.fn() });
    expect(props.updateArticle).toHaveBeenCalled();
  });
});
