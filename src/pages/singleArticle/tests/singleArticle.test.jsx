import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import store from '../../../store';
import { SingleArticles } from '../index';

jest.mock('react-notify-toast');

describe('Single Article page', () => {
  const props = {
    articles: [],
    getArticle: jest.fn(),
    fetchComments: jest.fn(),
    comments: [],
    replyToComment: jest.fn(),
    addCommentToArticle: jest.fn(),
    deleteArticleComment: jest.fn(),
    updateArticleComment: jest.fn(),
    match: {
      params: {
        slug: 'new-slug',
      },
    },

  };
  let instance;
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SingleArticles {...props} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('componentDidMount Method Called', () => {
    const spy = jest.spyOn(SingleArticles.prototype, 'componentDidMount');
    shallow(<SingleArticles {...props} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('onCommentChanged test', () => {
    instance = wrapper.instance();
    const event = {
      target: {
        value: 'comment',
        name: 'my comment',
      },
    };
    instance.onCommentChanged(event);
  });

  it('onChangeComment test', () => {
    instance = wrapper.instance();
    const event = {
      target: {
        value: 'comment',
        name: 'my comment',
      },
    };
    instance.onChangeComment(event);
  });

  it('showReplies test', () => {
    instance = wrapper.instance();
    instance.setState({ repliesDisplayState2: true });
    instance.showReplies(2);
    expect(instance.state.repliesDisplayState2).toBe(false);
  });

  it('postReplyToComment test', () => {
    instance = wrapper.instance();
    instance.postReplyToComment('article-slug', 2, 'this reply');
  });

  it('postComment test', () => {
    instance = wrapper.instance();
    instance.postComment();
  });

  it('deleteComment test', () => {
    instance = wrapper.instance();
    instance.deleteComment('article-slug', 2);
  });

  it('updateComment test', () => {
    instance = wrapper.instance();
    instance.updateComment(2);
    instance.setState({ commentToArticle: true });
    instance.updateComment(2);
  });
});
