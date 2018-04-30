import React, { Component } from 'react';
import Book from './SingleBook';
import PropTypes from 'prop-types';

function Searchresults (props){
  const results = props.books;
  console.log("props.BOOKS", props.books);
// if gibberish you get an object which is not falsy
// {error: "empty query", items: Array(0)}
// error
// :
// "empty query"
// items
// :
// []
// __proto__
// :
// Object
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

Searchresults.propTypes = {
  books: PropTypes.array.isRequired
}

export default Searchresults;