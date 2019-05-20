import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  fetchArticles,
  getSingleArticle,
  postArticle,
} from '../../actions/articlesActions';
import {
  POST_ARTICLE_FAILURE,
  POST_ARTICLE_SUCCESS,
  FETCH_AN_ARTICLE_FAILURE,
  FETCH_AN_ARTICLE_SUCCESS,
  GET_ARTICLES,

} from '../../actions/types';

jest.mock('react-notify-toast');
describe('Testing Articles', () => {
  const middlewares = [thunk];

  const mockStore = configureMockStore(middlewares);

  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));


  it('Testing get a single Article success', () => {
    const expectedResponse = [
      {
        id: 1,
        author: {
          username: 'rogha',
          firstname: 'Roghashin',
          lastname: 'Timbiti',
          bio: null,
          image: null,
          followers_no: 1,
          following_no: 0,
        },
        slug: 'new-of-testing-16',
      },
    ];

    const expectedActions = [{
      type: FETCH_AN_ARTICLE_SUCCESS,
      payload: expectedResponse,
    }];
    const slug = 'new-of-testing-16';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    const store = mockStore({});
    return store.dispatch(getSingleArticle(slug)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('Testing get a single Article failure', () => {
    const expectedResponse = 'Errors have occured';

    const expectedActions = [{
      type: FETCH_AN_ARTICLE_FAILURE,
      payload: expectedResponse,
    }];
    const slug = 'new-of-testing-16';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: expectedResponse,
      });
    });
    // configure Mock store
    const store = mockStore({});
    return store.dispatch(getSingleArticle(slug)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedActions);
    });
  });

  it('Testing getting all  Articles', () => {
    const expectedResponse = {
      count: 21,
      next: 'https://ah-backend.herokuapp.com/api/articles/?page=2',
      previous: null,
      results: [
        {
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
          share_article_links: {
            facebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A//ah-backend.herokuapp.com/api/articles/the-valley-in-the-darkness-22',
            twitter: 'https://twitter.com/home?status=https%3A//ah-backend.herokuapp.com/api/articles/the-valley-in-the-darkness-22',
            googleplus: 'https://plus.google.com/share?url=https%3A//ah-backend.herokuapp.com/api/articles/the-valley-in-the-darkness-22',
            email: 'mailto:?&subject=The%20Valley%20in%20the%20darkness&body=The%20Valley%20in%20the%20darkness%0A%0Ahttps%3A//ah-backend.herokuapp.com/api/articles/the-valley-in-the-darkness-22',
          },
          average_rating: null,
          title: 'The Valley in the darkness',
          description: 'A short story by Danny',
          slug: 'the-valley-in-the-darkness-22',
          body: 'come on',
          createdAt: '2019-05-19T16:16:30.806306Z',
          updatedAt: '2019-05-19T16:16:30.806338Z',
          tags: [
            'story',
            'test',
          ],
          likes: 1,
          dislikes: 1,
        },
      ],
    };

    const expectedPayload = [{
      payload: [{
        article_read_time: '4 minute read',
        author: {
          bio: null, firstname: null, followers_no: 0, following_no: 0, image: null, lastname: null, username: 'Daniel Roy',
        },
        average_rating: null,
        body: 'come on',
        createdAt: '2019-05-19T16:16:30.806306Z',
        description: 'A short story by Danny',
        dislikes: 1,
        favorite: [],
        id: 23,
        likes: 1,
        share_article_links: {
          email: 'mailto:?&subject=The%20Valley%20in%20the%20darkness&body=The%20Valley%20in%20the%20darkness%0A%0Ahttps%3A//ah-backend.herokuapp.com/api/articles/the-valley-in-the-darkness-22', facebook: 'https://www.facebook.com/sharer/sharer.php?u=https%3A//ah-backend.herokuapp.com/api/articles/the-valley-in-the-darkness-22', googleplus: 'https://plus.google.com/share?url=https%3A//ah-backend.herokuapp.com/api/articles/the-valley-in-the-darkness-22', twitter: 'https://twitter.com/home?status=https%3A//ah-backend.herokuapp.com/api/articles/the-valley-in-the-darkness-22',
        },
        slug: 'the-valley-in-the-darkness-22',
        tags: ['story', 'test'],
        title: 'The Valley in the darkness',
        updatedAt: '2019-05-19T16:16:30.806338Z',
      }],
      type: 'GET_ARTICLES',
    }];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    // configure Mock store
    const store = mockStore({});
    return store.dispatch(fetchArticles()).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions).toEqual(expectedPayload);
    });
  });
});
