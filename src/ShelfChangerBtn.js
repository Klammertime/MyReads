import React, { Component } from 'react';

class ShelfChangerBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book-shelf-changer">
      <select key={this.props.bookId}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
      </div>
    );
  }
}
  
export default ShelfChangerBtn;
