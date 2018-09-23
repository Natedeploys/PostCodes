// The Postcode Title component, just a title, nothing fancy
// Import local css
import React, { Component } from 'react';
import './PostcodeFormTitle.css';

class PostcodeFormTitle extends Component {
  render() {
    return (
      <div className='title'>
        Enter an address
      </div>
    );
  }
}

export default PostcodeFormTitle;
