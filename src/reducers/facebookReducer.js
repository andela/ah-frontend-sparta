import {
  IS_AUTHENTICATING_WITH_FB_STARTED,
  FB_AUTH_DONE_SUCCESS,
} from '../actions/types';

const initialState = {
  FaceBookToken: null,
  isAuthenticating: false,
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
    default:
      return state;
  }
}
