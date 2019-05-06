import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import { ChangePasswordActions } from
  '../../actions/resetActions/changePasswordActions';
import * as types from '../../actions/types';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('react-notify-toast');

describe('Change password', () => {
  describe('actions', () => {
    const newPassword = 'Dorothy123@';
    const confirmPassword = 'Dorothy123@';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNTU3ODE3MzE3fQ.XLyRn8oN2pmOfqepHJE9iV-jLgpvkHUktTCLlXob-5M';

    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.uninstall();
    });

    it('should change password', () => {
      moxios.wait(() => {
        const requestOne = moxios.requests.mostRecent();
        requestOne.respondWith({
          status: 200,
          response: { user: { message: 'Password has been reset' } },
        });
      });
      const Message = 'Password has been reset';
      const expectedActions = [
        { type: types.CHANGE_PASSWORD, payload: Message },
      ];

      const store = mockStore({ newpassword: '', confirmpassword: '', token: '' });
      return store.dispatch(ChangePasswordActions(newPassword, confirmPassword, token)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
