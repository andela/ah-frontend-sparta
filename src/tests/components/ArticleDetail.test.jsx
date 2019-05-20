import React from 'react';
import { shallow } from 'enzyme';
import ArticleDetail from '../../components/Articles/ArticleDetail';

describe('Articles Details Component', () => {
  let mountApp;
  const props = {
    article: {
      id: 1,
      author: {
        username: 'rogha',
      },
      article_read_time: 'less than a minute read',
      title: 'Post one',
      description: 'too long a story',
      slug: 'post-one-first',
      body: 'ahhhhh --edit me',
      createdAt: '2019-04-18T11:55:58.111843Z',
      tags: ['Arsenal', 'soccer', 'Andela'],
    },
  };
  beforeEach(() => {
    mountApp = shallow(<ArticleDetail {...props} />);
  });

  it('Should render without crashing', () => {
    expect(mountApp).toMatchSnapshot();
  });

  it('Should render articles with tags', () => {
    expect(mountApp.find('span')).toHaveLength(3);
  });
});
