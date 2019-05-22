import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import instance from '../../helpers/axiosInstance';
import { likeAnArticle, dislikeAnArticle } from '../likeDislikeActions';
import {
  LIKE_AN_ARTICLE, DISLIKE_AN_ARTICLE,
  ALREADY_DISLIKE_AN_ARTICLE,
  ALREADY_LIKE_AN_ARTICLE,
  ERROR,
} from '../types';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('react-notify-toast');

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe('like and dislike', () => {
  beforeEach(() => {
    moxios.install(instance);
  });

  afterEach(() => {
    moxios.uninstall(instance);
  });
  it('likes an article successfully', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          article: 'this is a test article',
          username: 'test_user',
          details: {
            likes: true,
          },
        },
      });
    });
    const expectedActions = [{ type: LIKE_AN_ARTICLE, payload: 1 }];
    return store.dispatch(likeAnArticle('testSlug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('dislikes an article successfully', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          article: 'this is a test article',
          username: 'test_user',
          details: {
            likes: false,
          },
        },
      });
    });
    const expectedActions = [{ type: DISLIKE_AN_ARTICLE, payload: 1 }];
    return store.dispatch(dislikeAnArticle('testSlug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('already dislike an article', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          msg: 'You have already disliked this article',
        },
      });
    });
    const expectedActions = [{ type: ALREADY_DISLIKE_AN_ARTICLE, payload: 0 }];
    return store.dispatch(dislikeAnArticle('testSlug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('already liked an article', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          msg: 'You have already liked this article',
        },
      });
    });
    const expectedActions = [{ type: ALREADY_LIKE_AN_ARTICLE, payload: 0 }];
    return store.dispatch(likeAnArticle('testSlug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('log in required, at liking article', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 403,
        response: {
        },
      });
    });
    const expectedActions = [{
      type: ERROR,
      payload: 'Can not fetch your data, please login again',
    }];
    return store.dispatch(likeAnArticle('testSlug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('log in required, at disliking article', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 403,
        response: {
        },
      });
    });
    const expectedActions = [{
      type: ERROR,
      payload: 'Can not fetch your data, please login again',
    }];
    return store.dispatch(dislikeAnArticle('testSlug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
