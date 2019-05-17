import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../helpers/axiosInstance';
import {
  postArticle,
  deleteSingleArticle,
  editSingleArticle,
} from '../../actions/articlesActions';
import {
  POST_ARTICLE_FAILURE,
  POST_ARTICLE_SUCCESS,
  DELETE_AN_ARTICLE_SUCCESS,
  DELETE_AN_ARTICLE_FAILURE,
  EDIT_AN_ARTICLE_SUCCESS,
  EDIT_AN_ARTICLE_FAILURE,

} from '../../actions/types';

jest.mock('react-notify-toast');
describe('Testing Articles', () => {
  const middlewares = [thunk];

  const mockStore = configureMockStore(middlewares);

  beforeEach(() => moxios.install(axiosInstance));
  afterEach(() => moxios.uninstall(axiosInstance));

  it('Testing post an article', () => {
    const expectedResponse = {
      article: {
        id: 19,
        author: {
          username: 'kiryowa22',
          firstname: null,
          lastname: null,
          bio: null,
          image: null,
          followers_no: 0,
          following_no: 2,
        },
        article_read_time: 'less than a minute read',
        favorite: [],
        share_article_links: {
          facebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A//ah-backend.herokuapp.com/api/articles/hello-slug-18',
          twitter: 'https://twitter.com/home?status=https%3A//ah-backend.herokuapp.com/api/articles/hello-slug-18',
          googleplus: 'https://plus.google.com/share?url=https%3A//ah-backend.herokuapp.com/api/articles/hello-slug-18',
          email: 'mailto:?&subject=hello%20slug&body=hello%20slug%0A%0Ahttps%3A//ah-backend.herokuapp.com/api/articles/hello-slug-18',
        },
        average_rating: null,
        title: 'hello slug',
        description: 'teamates',
        slug: 'hello-slug-18',
        body: 'great teammates',
        createdAt: '2019-05-16T15:16:51.738690Z',
        updatedAt: '2019-05-16T15:16:51.738745Z',
        tags: [],
        likes: 0,
        dislikes: 0,
      },
    };

    const article = {
      title: 'hello slug',
      description: 'teamates',
      body: 'great teammates',
    };
    const expectedActions = [{
      type: POST_ARTICLE_SUCCESS,
      payload: expectedResponse,
    }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: expectedResponse,
      });
    });
    const store = mockStore({});
    const historyMock = { history: { push: jest.fn() } };
    const slug = 'new-article';
    return store.dispatch(postArticle(article, historyMock)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('Testing post an Failure', () => {
    const expectedResponse = {
      errors: {
        body: [
          'This field is required.',
        ],
        description: [
          'This field is required.',
        ],
        title: [
          'This field is required.',
        ],
      },
    };

    const article = {

    };
    const expectedActions = [{
      type: POST_ARTICLE_FAILURE,
      payload: expectedResponse,
    }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {
          errors: {
            title: [
              'This field is required.',
            ],
            description: [
              'This field is required.',
            ],
            body: [
              'This field is required.',
            ],
          },
        },
      });
    });
    const store = mockStore({});
    const historyMock = { history: { push: jest.fn() } };
    const slug = 'new-article';
    return store.dispatch(postArticle(article, historyMock)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('Testing deleting an article', () => {
    const expectedState = 'successfully deleted an article';
    const expectedActions = [{
      type: DELETE_AN_ARTICLE_SUCCESS,
      payload: 'successfully deleted an article',
    }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });
    const store = mockStore({});
    const historyMock = { history: { push: jest.fn() } };
    const slug = 'new-article';
    return store.dispatch(deleteSingleArticle(slug, historyMock)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('Testing deleting an article fail', () => {
    const expectedState = 'Errors have occured';
    const expectedActions = [{
      type: DELETE_AN_ARTICLE_FAILURE,
      payload: 'Errors have occured',
    }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedState,
      });
    });
    const store = mockStore({});
    const historyMock = { history: { push: jest.fn() } };
    const slug = 'new-article';
    return store.dispatch(deleteSingleArticle(slug, historyMock)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('Testing Editing  an article success', () => {
    const expectedResponse = [
      {
        id: 29,
        author: {
          username: 'kiryowa22',
          firstname: null,
          lastname: null,
          bio: null,
          image: null,
          followers_no: 0,
          following_no: 2,
        },
        article_read_time: 'less than a minute read',
        favorite: [],
        share_article_links: {
          facebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A//ah-backend.herokuapp.com/api/articles/brio-23',
          twitter: 'https://twitter.com/home?status=https%3A//ah-backend.herokuapp.com/api/articles/brio-23',
          googleplus: 'https://plus.google.com/share?url=https%3A//ah-backend.herokuapp.com/api/articles/brio-23',
          email: 'mailto:?&subject=Brio&body=Brio%0A%0Ahttps%3A//ah-backend.herokuapp.com/api/articles/brio-23',
        },
        average_rating: null,
        title: 'Brio',
        description: 'Anyati',
        slug: 'brio-23',
        body: 'Come on by Francis',
        createdAt: '2019-05-21T06:59:03.698529Z',
        updatedAt: '2019-05-21T06:59:29.302954Z',
        tags: [
          'andela',
          'uganda',
          'brio',
        ],
        likes: 0,
        dislikes: 0,
      }];

    const articleData = {
      title: 'hello slug',
      description: 'teamates',
      body: 'great teammates',
      tags: [
        'andela',
        'uganda',
        'brio',
      ],
    };
    const expectedActions = [{
      type: EDIT_AN_ARTICLE_SUCCESS,
      payload: expectedResponse,
    }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    const store = mockStore({});
    const historyMock = { history: { push: jest.fn() } };
    const slug = 'new-article';
    return store.dispatch(editSingleArticle(articleData, historyMock, slug)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('Testing Editing  an article fail', () => {
    const expectedResponse = 'Errors have occured';

    const articleData = {
      title: 'hello slug',
      description: 'teamates',
      body: 'great teammates',
      tags: [
        'andela',
        'uganda',
        'brio',
      ],
    };
    const expectedActions = [{
      type: EDIT_AN_ARTICLE_FAILURE,
      payload: expectedResponse,
    }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedResponse,
      });
    });
    const store = mockStore({});
    const historyMock = { history: { push: jest.fn() } };
    const slug = 'new-article';
    return store.dispatch(editSingleArticle(articleData, historyMock, slug)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });
});
