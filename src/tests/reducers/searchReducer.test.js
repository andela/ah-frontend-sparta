import { GET_TITLE_FROM_SEARCH } from '../../actions/types';
import searchReducer from '../../reducers/searchReducer';

describe('search reducer', () => {
  it('should get payload', () => {
    const initialState = {
      searchArticles: [],
    };
    const action = {
      type: GET_TITLE_FROM_SEARCH,
      payload: [{ id: 1, title: 'this is a sample article' }],
    };
    const newState = searchReducer(initialState, action);
    expect(newState).toEqual([{ id: 1, title: 'this is a sample article' }]);
  });
});
