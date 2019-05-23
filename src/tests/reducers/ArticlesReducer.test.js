import {
  POST_ARTICLE_FAILURE,
  POST_ARTICLE_SUCCESS,
  FETCH_AN_ARTICLE_FAILURE,
  FETCH_AN_ARTICLE_SUCCESS,
  GET_ARTICLES,
  DELETE_AN_ARTICLE_SUCCESS,
  DELETE_AN_ARTICLE_FAILURE,
  EDIT_AN_ARTICLE_SUCCESS,
  EDIT_AN_ARTICLE_FAILURE,
  ORIGINAL,
  GET_NEXT,
} from '../../actions/types';
import articlesReducer, { paginateArticles, firstArticles } from
  '../../reducers/articlesReducer';

describe('Articles Reducer', () => {
  it('Should return a  new state if receiving a type', () => {
    const initialState = [];
    const expectation = { article: undefined, articles: [], error: undefined };
    const action = {
      type: GET_ARTICLES,
      payload: [],
    };

    const newState = articlesReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });

  it('test post article failure', () => {
    const initialState = { error: undefined, article: undefined, articles: [] };
    const expectation = { article: undefined, error: 'Errors have occured' };
    const action = {
      type: POST_ARTICLE_FAILURE,
      payload: 'Errors have occured',
    };

    const newState = articlesReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });

  it('test post article success', () => {
    const initialState = { error: undefined, article: undefined, articles: [] };
    const expectation = { article: 'Article created Successfully', error: undefined };
    const action = {
      type: POST_ARTICLE_SUCCESS,
      payload: 'Article created Successfully',
    };

    const newState = articlesReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });
  it('test fetch article success', () => {
    const initialState = { error: undefined, article: undefined, articles: [] };
    const expectation = {
      article: {
        article: {
          body: 'great teammates',
          description: 'teamates',
          id: 19,
          slug: 'hello-slug-18',
          title: 'hello slug',
        },
      },
      error: undefined,
    };

    const getResponse = {
      article: {
        id: 19,
        title: 'hello slug',
        description: 'teamates',
        slug: 'hello-slug-18',
        body: 'great teammates',
      },
    };
    const action = {
      type: FETCH_AN_ARTICLE_SUCCESS,
      payload: getResponse,
    };

    const newState = articlesReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });
  it('test fetch article failure', () => {
    const initialState = { error: undefined, article: undefined, articles: [] };
    const expectation = {
      article: undefined,
      error: 'Errors have occured',
    };

    const errorMessage = 'Errors have occured';
    const action = {
      type: FETCH_AN_ARTICLE_FAILURE,
      payload: errorMessage,
    };

    const newState = articlesReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });

  it('test edit an article success', () => {
    const initialState = { error: undefined, article: undefined, articles: [] };
    const expectation = {
      article: {
        article: {
          body: 'great teammates',
          description: 'teamates',
          id: 19,
          slug: 'hello-slug-18',
          title: 'hello slug',
        },
      },
      error: undefined,
    };

    const getResponse = {
      article: {
        id: 19,
        title: 'hello slug',
        description: 'teamates',
        slug: 'hello-slug-18',
        body: 'great teammates',
      },
    };
    const action = {
      type: EDIT_AN_ARTICLE_SUCCESS,
      payload: getResponse,
    };

    const newState = articlesReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });

  it('test edit an article failure', () => {
    const initialState = { error: undefined, article: undefined, articles: [] };
    const expectation = {
      article: undefined,
      error: 'Errors have occured',
    };

    const errorMessage = 'Errors have occured';
    const action = {
      type: EDIT_AN_ARTICLE_FAILURE,
      payload: errorMessage,
    };

    const newState = articlesReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });

  it('test delete an article success', () => {
    const initialState = { error: undefined, article: undefined, articles: [] };
    const expectation = { article: 'Article created Successfully deleted', error: undefined };
    const action = {
      type: DELETE_AN_ARTICLE_SUCCESS,
      payload: 'Article created Successfully deleted',
    };

    const newState = articlesReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });

  it('test delete an article failure', () => {
    const initialState = { error: undefined, article: undefined, articles: [] };
    const expectation = {
      article: 'Errors have occured',
      error: undefined,
    };

    const errorMessage = 'Errors have occured';
    const action = {
      type: DELETE_AN_ARTICLE_FAILURE,
      payload: errorMessage,
    };

    const newState = articlesReducer(initialState, action);
  });

  it('test get paginated article ', () => {
    const initialState = [];
    const expectation = [];

    const action = {
      type: ORIGINAL,
      articles: [],
    };

    const newState = firstArticles(initialState, action);
    expect(newState).toEqual(expectation);
  });
  it('test get next paginated article ', () => {
    const initialState = [];
    const expectation = [];

    const action = {
      type: GET_NEXT,
      articles: [],
    };

    const newState = paginateArticles(initialState, action);
    expect(newState).toEqual(expectation);
  });

  it('test get reading stats', () => {
    const initialState = [];
    const expectation = { readingStats: [] };

    const action = {
      type: 'FETCH_READ_STATS',
      payload: [],
    };

    const newState = articlesReducer(initialState, action);
    expect(newState).toEqual(expectation);
  });
});
