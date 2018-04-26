
import React, { Component } from 'react';
// import Book from './Book';
import Book from './SingleBook';
import Books from './Books.js';

// TODO how do i figure out bookshelf title dynamically?
// shelf, these aren't even all Read, you have to divide them.

// here if i can get the right books on the right shelf it might take care of 
// the rendering ?
// like a filter then a map?? 

// yah like with contacts the example??
function Bookshelf (props){
  console.log("props", props);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <Books books={props.books} />
        </div>
      </div>
    );
}

export default Bookshelf;