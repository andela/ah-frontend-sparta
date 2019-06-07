import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { signUpUser, signInUser } from '../../actions/signupSigninActions';

jest.mock('react-notify-toast');

describe('signupSignin actions tests', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('signUpUser Success', () => {
    const userData = {
      user: {
        email: 'testemailq@gmail.com',
        username: 'testusernameq',
        password: 'password123',
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          user: {
            email: 'roghashin.timbiti@andela.com',
            username: 'ezroghaa',
            token:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjUsImV4cCI6MTU1ODQ1OTE4Mn0.iYAUpLL_sbJ1PVqzcpeTJzFeM3bk-c4DTve7leDkVOU',
          },
        },
      });
    });
    const props = {
      history: { push: jest.fn() },
    };
    return signUpUser(userData, props).then(results => expect(results).toBe(undefined));
  });

  it('signUpUser Error', () => {
    const userData = {
      user: {
        email: 'testemailq@gmail.com',
        username: 'testusernameq',
        password: '',
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          errors: {
            password: ['This field may not be blank.'],
          },
        },
      });
    });
    const props = {
      history: { push: jest.fn() },
    };
    return signUpUser(userData, props).then(results => expect(results).toBe(undefined));
  });

  it('signInUser Success', () => {
    const userData = {
      user: {
        email: 'testemailq@gmail.com',
        password: 'password123',
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          user: {
            email: 'roghashin.timbiti@andela.com',
            username: 'ezroghaa',
            token:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjUsImV4cCI6MTU1ODQ1OTE4Mn0.iYAUpLL_sbJ1PVqzcpeTJzFeM3bk-c4DTve7leDkVOU',
          },
        },
      });
    });
    const props = {
      history: { push: jest.fn() },
    };
    return signInUser(userData, props).then(results => expect(results).toBe(undefined));
  });

  it('signInUser Error', () => {
    const userData = {
      user: {
        email: 'testemailq@gmail.com',
        password: '',
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          errors: {
            error: [
              'This user has not been verified.',
            ],
          },
        },
      });
    });
    const props = {
      history: { push: jest.fn() },
    };
    return signInUser(userData, props).then(results => expect(results).toBe(undefined));
  });
});
