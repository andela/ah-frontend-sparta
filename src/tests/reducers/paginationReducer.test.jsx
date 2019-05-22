import { PAGE_STATE_CHANGE } from '../../actions/types';
import paginationReducer from '../../reducers/paginationReducer';


describe('pagination Reducer', () => {
  it('Should return a  new state if receiving a type', () => {
    const initialState = {
      next: null,
      prev: null,
    };
    const expectation = {
      next: '',
      prev: '',
    };
    const action = {
      type: PAGE_STATE_CHANGE,
      payload: {
        next: '',
        prev: '',
      },
    };

    const newState = paginationReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });
});
