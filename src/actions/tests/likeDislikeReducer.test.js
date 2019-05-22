import {
  LIKE_AN_ARTICLE,
  ALREADY_DISLIKE_AN_ARTICLE,
  DISLIKE_AN_ARTICLE,
  ALREADY_LIKE_AN_ARTICLE,
} from '../types';
import likeDislikeReducer from '../../reducers/likeDislikeReducer';

describe('the like dislike reducer', () => {
  const initialState = {
    likes: null,
  };
  it('should like an article', () => {
    const theDispatchedAction = {
      type: LIKE_AN_ARTICLE,
    };
    const newState = {
      likes: 1,
    };
    expect(likeDislikeReducer(initialState,
      theDispatchedAction)).toEqual(newState);
  });
  it('should dislike an article', () => {
    const theDispatchedAction = {
      type: DISLIKE_AN_ARTICLE,
    };
    const newState = {
      likes: 0,
    };
    expect(likeDislikeReducer(initialState,
      theDispatchedAction)).toEqual(newState);
  });
  it('should already dislike an article', () => {
    const theDispatchedAction = {
      type: ALREADY_DISLIKE_AN_ARTICLE,
    };
    const newState = {
      likes: null,
    };
    expect(likeDislikeReducer(initialState,
      theDispatchedAction)).toEqual(newState);
  });
  it('should already liked an article', () => {
    const theDispatchedAction = {
      type: ALREADY_LIKE_AN_ARTICLE,
    };
    const newState = {
      likes: null,
    };
    expect(likeDislikeReducer(initialState,
      theDispatchedAction)).toEqual(newState);
  });
});
