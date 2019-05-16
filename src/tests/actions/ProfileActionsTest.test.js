import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../actions/profileActions';
import instance from '../../helpers/axiosInstance';

describe('Profile actions tests', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });

  it('Testing get profile', () => {
    const payload = {
      profile: {},
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: payload,
      });
    });
    const expectedActions = ['USER', 'ERROR'];
    const store = mockStore({ profile: {} });

    return store.dispatch(actions.fetchProfileActions()).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);

      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('Testing edit profile', () => {
    const payload = {
      profile: {},
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: payload,
      });
    });
    const expectedActions = ['USER', 'ERROR'];
    const store = mockStore({ profile: {} });

    return store.dispatch(actions.updateProfileActions(), { firstname: 'rogha' }).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);

      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('Testing save Image', () => {
    const payload = {
      profile: {},
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: payload,
      });
    });
    const expectedActions = [];
    const store = mockStore({ profile: {} });

    return store.dispatch(actions.saveImageActions(), { image: 'rogha' }).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);

      expect(actionTypes).toEqual(expectedActions);
    });
  });
});
