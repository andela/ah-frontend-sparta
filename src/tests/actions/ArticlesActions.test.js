import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchArticles from '../../actions/articlesActions';

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
});
