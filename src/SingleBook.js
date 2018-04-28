import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  changeShelf = (e) => {
    this.props.changeShelf(e, this.props.bookID);
  }

  render() {
    const imgUrl = this.props.book.imageLinks.thumbnail;
    const divStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    };

    return (
      <div className="book">
        <div className="book-top">
          <div 
            className="book-cover" 
            style={divStyle}>
          </div>
          <div className="book-shelf-changer">
            <select bookid={this.props.book.id} onChange={this.changeShelf}>
              <option value="none">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book; 