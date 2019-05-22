import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ShareArticles from '../../components/Articles/ShareArticles';

describe('Share Articles Component', () => {
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
    mountApp = renderer.create(
      <Router>
        <ShareArticles {...props} />
      </Router>,
    );
  });

  it('Should render without crashing', () => {
    expect(mountApp).toMatchSnapshot();
  });
});
