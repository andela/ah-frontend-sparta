import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import instance from '../../helpers/axiosInstance';
import { GET_TITLE_FROM_SEARCH, ERROR } from '../../actions/types';
import { getArticleFromSearch } from '../../actions/searchActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('react-notify-toast');

describe('search', () => {
  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });
  it('should get search article or articles', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          title: 'post4',
          like: 10,
          dislikes: 4,
        },
      });
    });
    const expectedActions = [{
      type: GET_TITLE_FROM_SEARCH,
      payload: {
        title: 'post4',
        like: 10,
        dislikes: 4,
      },
    }];
    return store.dispatch(getArticleFromSearch('Post4')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('log in required, to search article', () => {
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
    return store.dispatch(getArticleFromSearch('testSlug')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
