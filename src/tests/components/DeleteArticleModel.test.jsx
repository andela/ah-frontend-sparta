import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import DeleteArticleModel from '../../components/Articles/DeleteArticleModel';

describe('Delete Article  Component', () => {
  let mountApp;
  const props = {
    title: '',
    slug: '',
    deleteAnArticle: jest.fn(),
  };
  beforeEach(() => {
    mountApp = renderer.create(
      <Router>
        <DeleteArticleModel {...props} />
      </Router>,
    );
  });

  it('Should render without crashing', () => {
    expect(mountApp).toMatchSnapshot();
  });

  it('should call a delete an article function on click', () => {
    const wrapper = mount(
      <DeleteArticleModel {...props} />,
    );
    const okButton = wrapper.find('#DeleteArticleBtn').first();
    okButton.simulate('click');
    expect(props.deleteAnArticle).toHaveBeenCalled();
  });
});
