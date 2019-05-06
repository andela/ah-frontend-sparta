import React, { Component } from 'react';
import axios from 'axios';

class StarterContainer extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      const posts = res.data;
      this.setState({ items: posts });
    });
  }

  render() {
    return (
      <div>
    {this.state.items.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))}
      </div>
    );
  }
}

export default StarterContainer;
