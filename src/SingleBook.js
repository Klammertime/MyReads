import React, { Component } from 'react';
import ShelfChangerBtn from './ShelfChangerBtn';
import * as BooksAPI from './BooksAPI'


class Book extends Component {
  constructor(props) {
    super(props);
  }

  changeShelf = (e, bookObj) => {
    // this.props.changeShelf(e, bookObj);
    console.log("e", e, "bookObj", bookObj);
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
          <select bookid={this.props.book.id}>
            <option value="none" disabled>Move to...</option>
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