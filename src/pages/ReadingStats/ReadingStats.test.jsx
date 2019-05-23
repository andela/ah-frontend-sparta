import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {
  ReadingStats as ReadingStatsContainer,
  mapStateToProps,
} from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  readingStats: [],
};
const store = mockStore(initialState);
jest.mock('moment', () => () => ({
  format: () => '2018–01–30T12:34:56+00:00',
}));

describe('ReadingStats container', () => {
  const articles = [];
  const props = {
    readingStats: [
      {
        article: {
          id: 1,
          author: {
            username: 'Rogha',
          },
          createdAt: '2019-05-23T07:00:45.407157Z',
        },
      },
    ],
    fetchReadingStats: jest.fn(),
  };

  it('componentDidMount Method Called', () => {
    const spy = jest.spyOn(
      ReadingStatsContainer.prototype,
      'componentDidMount',
    );
    mount(
      <Router>
        <Provider store={store}>
          <ReadingStatsContainer {...props} />
        </Provider>
      </Router>,
    );
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should map state to props', () => {
    const state = {
      articles: {
        readingStats: [],
      },
    };
    expect(mapStateToProps(state)).toEqual({
      readingStats: [],
    });
  });
});
