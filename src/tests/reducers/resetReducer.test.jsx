import {
  PASSWORD_RESET,
  PASSWORD_RESET_FAIL,
  CHANGE_PASSWORD,
} from '../../actions/types';
import resetReducer from '../../reducers/resetReducer';

describe('reset Reducer', () => {
  it('Should return new state if receiving a type', () => {
    const initialState = [];
    const action = {
      type: PASSWORD_RESET,
      payload: [],
    };

    const newState = resetReducer(initialState, action);
    expect(newState).toEqual({ message: [] });
  });
});

describe('reset fail Reducer', () => {
  it('Should return new state if Password reset fail', () => {
    const initialState = [];
    const action = {
      type: PASSWORD_RESET_FAIL,
      payload: [],
    };

    const newState = resetReducer(initialState, action);
    expect(newState).toEqual({ error: [] });
  });
});

describe('change password Reducer', () => {
  it('Should return new state if Password change', () => {
    const initialState = [];
    const action = {
      type: CHANGE_PASSWORD,
      payload: [],
    };

    const newState = resetReducer(initialState, action);
    expect(newState).toEqual({ message: [] });
  });
});
