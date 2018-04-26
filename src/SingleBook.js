import React, { Component } from 'react';
import ShelfChangerBtn from './ShelfChangerBtn';

function Book(props) {
  const imgUrl = props.book.imageLinks.thumbnail;
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
        <ShelfChangerBtn onClick={props.changeShelf} bookId={props.book.id}/>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  )
}

export default Book; 