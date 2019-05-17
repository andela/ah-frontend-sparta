import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchArticles, getSingleArticle, postArticle } from '../../actions/articlesActions';


const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

beforeEach(() => moxios.install());
afterEach(() => moxios.uninstall());
describe('Testing Articles', () => {
  it('Testing getting all  Articles', () => {
    const expectedState = [
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
      },
    ];

    const expectedActions = [];

    moxios.stubRequest('https://ah-backend.herokuapp.com/api/articles/', {
      status: 200,
      response: expectedState,
    });
    const store = mockStore({});

    store.dispatch(fetchArticles());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Testing get a single Article', () => {
    const expectedState = [
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

    const expectedActions = [];
    const slug = 'new-of-testing-16';

    moxios.stubRequest(`https://ah-backend.herokuapp.com/api/articles/${slug}`, {
      status: 200,
      response: expectedState,
    });
    const store = mockStore({});

    store.dispatch(getSingleArticle(slug));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('Testing get a single Article Fail', () => {
    const expectedState = [
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
        slug: 'new',
      },
    ];

    const expectedActions = [];
    const slug = 'new-of-testing-16';

    moxios.stubRequest(`https://ah-backend.herokuapp.com/api/articles/${slug}`, {
      status: 400,
      response: expectedState,
    });
    const store = mockStore({});

    store.dispatch(getSingleArticle(slug));

    expect(store.getActions()).toEqual(expectedActions);
  });

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
    const expectedActions = [];
    const historyMock = { history: { push: jest.fn() } };
    moxios.stubRequest('https://ah-backend.herokuapp.com/api/articles/', {
      status: 201,
      response: expectedResponse,
    });
    const store = mockStore({});

    store.dispatch(postArticle(article, historyMock));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
