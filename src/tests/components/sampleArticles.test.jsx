import React from 'react';
import renderer from 'react-test-renderer';
import SampleArticles from '../../components/Articles';

describe('Sample Articles Component', () => {
  let mountApp;
  const props = {
    articles: [
      {
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
      },
    ],
  };
  beforeEach(() => {
    mountApp = renderer.create(<SampleArticles {...props} />);
  });

  it('Should render without crashing', () => {
    expect(mountApp).toMatchSnapshot();
  });
});
