import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
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
    count: '',
    likeArticle: jest.fn(),
    likeAnArticle: jest.fn(),
    dislikeAnArticle: jest.fn(),
    nextProps: {
      likeDislike: {
        likes: 0,
      },
    },
  };
  let instance;
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SingleArticles {...props} />);
    instance = wrapper.instance();
    wrapper.instance().setState = jest.fn();
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

  // it('showReplies test', () => {
  //   instance = wrapper.instance();
  //   instance.setState({ repliesDisplayState2: true });
  //   instance.showReplies(2);
  //   expect(instance.state.repliesDisplayState2).toBe(false);
  // });

  it('postReplyToComment test', () => {
    instance.postReplyToComment('article-slug', 2, 'this reply');
    expect(props.replyToComment).toHaveBeenCalled();
  });

  it('postComment test', () => {
    instance.postComment();
    expect(props.addCommentToArticle).toHaveBeenCalled();
  });

  it('deleteComment test', () => {
    instance.deleteComment('article-slug', 2);
    expect(props.deleteArticleComment).toHaveBeenCalled();
  });

  it('updateComment test', () => {
    wrapper.setState({ commentToArticle: true });
    instance.updateComment(2);
    expect(props.updateArticleComment).toHaveBeenCalled();
  });

  it('updateComment Not passing comment test', () => {
    instance.updateComment(2);
    expect(props.updateArticleComment).not.toHaveBeenCalled();
  });

  it('likeAnArticle Method Called', () => {
    instance.likeArticle();
    expect(props.likeAnArticle).toHaveBeenCalled();
  });
  it('dislikeAnArticle Method Called', () => {
    instance.dislikeArticle();
    expect(props.dislikeAnArticle).toHaveBeenCalled();
  });
  it('componentWillReceiveProps Method Called', () => {
    instance.componentWillReceiveProps(props.nextProps);
    expect(props.getArticle).toHaveBeenCalled();
    expect(props.count).toBeDefined();
  });
  it('get article has been called', () => {
    props.getArticle(props.slug);
    expect(props.getArticle).toHaveBeenCalledTimes(2);
  });
});
