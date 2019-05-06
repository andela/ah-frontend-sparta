import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import { resetPasswordActions } from
  '../../../actions/resetActions/resetPasswordActions';
import * as types from '../../../actions/types';
import { response, errorResponse } from '../fixtures/moxios_mock';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('react-notify-toast');

describe('Reset password', () => {
  describe('actions', () => {
    const email = 'dorothyas@gmail.com';
    const badEmail = 'dorothy@gmail.com';

    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('should create an action to provide an email to send a link to', () => {
      moxios.wait(() => {
        const requestOne = moxios.requests.mostRecent();
        requestOne.respondWith({
          status: 200,
          response: { user: response.message },
        });
      });
      const message = 'Password reset link has been sent to your Email';
      const expectedActions = [
        { type: types.PASSWORD_RESET, payload: message },
      ];

      const store = mockStore({ email: '' });
      return store.dispatch(resetPasswordActions(email)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should not create an action to provide an email to send a link to', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: errorResponse
          ,
        });
      });
      const expectedActions = [
        { type: types.PASSWORD_RESET_FAIL, payload: 'wrong credentials' },
      ];

      const store = mockStore({ email: '' });
      return store.dispatch(resetPasswordActions(badEmail)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
