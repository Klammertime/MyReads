import React, { Component } from 'react';
import ShelfChangerBtn from './ShelfChangerBtn';
import Book from './SingleBook';

function Books (props) {
    return (
      <ol className="books-grid">
        {props.books.map((book) => (
          <li key={book.id}>
            <Book book={book}/>
          </li>
      ))}
      </ol>
    );
  }

export default Books;