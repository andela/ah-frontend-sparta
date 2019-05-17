import {
  IS_AUTHENTICATING_WITH_FB_STARTED,
  FB_AUTH_DONE_SUCCESS,
  USER_AUTHENTICATED,
} from '../actions/types';

const initialState = {
  FaceBookToken: null,
  isAuthenticating: false,
  userAuthenticated: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_AUTHENTICATING_WITH_FB_STARTED:
      return {
        ...state,
        isAuthenticating: true,
      };
    case FB_AUTH_DONE_SUCCESS:
      return {
        ...state,
        FaceBookToken: action.payload,
        isAuthenticating: false,
      };
    case USER_AUTHENTICATED:
      return {
        ...state,
        userAuthenticated: action.payload.userAuthenticated,
      };
    default:
      return state;
  }
}
