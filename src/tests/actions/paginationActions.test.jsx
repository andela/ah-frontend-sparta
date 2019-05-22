import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getOriginal, getNext } from '../../actions/paginationActions';
import { articles } from '../../reducers/tests/fixtures/moxios_mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('update process', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('get paginated data successfully', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          results: {
            articles: {
              count: 1,
              next: '',
              previous: '',
              results: [
                {},
              ],
            },
          },
        },
      });
    });
    const expectedActions = [
      {
        type: 'ORIGINAL',
        articles: {
          articles: {
            count: 1,
            next: '',
            previous: '',
            results: [
              {},
            ],
          },
        },

      },
      {
        type: 'PAGE_STATE_CHANGE',
        payload: {
          next: undefined,
          prev: undefined,
        },
      },
    ];
    return store.dispatch(getOriginal()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('get next ', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          results: {
            articles: {
              count: 1,
              next: '',
              previous: '',
              results: [
                {},
              ],
            },
          },
        },
      });
    });
    const expectedActions = [
      {
        type: 'GET_NEXT',
        articles: {
          articles: {
            count: 1,
            next: '',
            previous: '',
            results: [
              {},
            ],
          },
        },

      },
      {
        type: 'PAGE_STATE_CHANGE',
        payload: {
          next: undefined,
          prev: undefined,
        },
      },
    ];
    return store.dispatch(getNext('')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
