import React, { Component } from 'react';
import Book from './SingleBook';

function Searchresults (props){
  const results = props.books;
  console.log("props.BOOKS", props.books);

    return (
      props.books
        ? 
      <div className="bookshelf">
        <h2 className="bookshelf-title">Search Results</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {props.books.map((book) => (
                <li key={book.id}>
                  <Book book={book} changeShelf={props.changeShelf} bookID={book.id}/>
                </li>
              ))}
            </ol>
          </div>
      </div>
        :
        <div className="bookshelf">
        <h2 className="bookshelf-title">No Search Results</h2>
      </div>
    );
}

export default Searchresults;