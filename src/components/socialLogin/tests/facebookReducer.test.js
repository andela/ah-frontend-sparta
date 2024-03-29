import {
  IS_AUTHENTICATING_WITH_FB_STARTED,
  FB_AUTH_DONE_SUCCESS,
  USER_AUTHENTICATED,
} from '../../../actions/types';
import facebookReducer from '../../../reducers/facebookReducer';

describe('Facebook Reducer Tests', () => {
  const initialState = {
    FaceBookToken: null,
    isAuthenticating: false,
    userAuthenticated: false,
  };
  it('should start the auth process', () => {
    const theDispatchedAction = {
      type: IS_AUTHENTICATING_WITH_FB_STARTED,
    };
    const newState = {
      FaceBookToken: null,
      isAuthenticating: true,
      userAuthenticated: false,
    };
    expect(facebookReducer(initialState,
      theDispatchedAction)).toEqual(newState);
  });
  it('should authenticate successfully', () => {
    const theDispatchedAction = {
      type: FB_AUTH_DONE_SUCCESS,
      payload: 'TEST_TOKEN_FROM_BACKEND',
    };
    const newState = {
      FaceBookToken: 'TEST_TOKEN_FROM_BACKEND',
      isAuthenticating: false,
      userAuthenticated: false,
    };
    expect(facebookReducer(initialState,
      theDispatchedAction)).toEqual(newState);
  });
  it('should return default state', () => {
    const theDispatchedAction = {
      type: 'TEST',
    };
    expect(facebookReducer(initialState,
      theDispatchedAction)).toEqual(initialState);
  });
  it('should change user authenticated state', () => {
    const theDispatchedAction = {
      type: USER_AUTHENTICATED,
      payload: { userAuthenticated: false },
    };
    const newState = {
      FaceBookToken: null,
      isAuthenticating: false,
      userAuthenticated: true,
    };
    expect(facebookReducer(newState,
      theDispatchedAction)).toEqual(initialState);
  });
});
