import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import loginWithFb from '../../../actions/facebookActions';
import {
  IS_AUTHENTICATING_WITH_FB_STARTED,
  FB_AUTH_DONE_SUCCESS,
} from '../../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authentication process', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('logs in successfully', () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          auth_token: {
            token: 'test_token',
          },
        },
      });
    });
    const expectedActions = [
      { type: IS_AUTHENTICATING_WITH_FB_STARTED },
      {
        payload: 'test_token',
        type: FB_AUTH_DONE_SUCCESS,
      }];
    return store.dispatch(loginWithFb('eyJ0eXAiOiJKV1QiLCJ')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
