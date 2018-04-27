
import React, { Component } from 'react';
// import Book from './Book';
import Book from './SingleBook';
import ShelfChangerBtn from './ShelfChangerBtn';


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
        <ol className="books-grid">
        {props.books.map((book) => (
          <li key={book.id}>
            <Book book={book}/>
          </li>
      ))}
      </ol>
        </div>
      </div>
    );
}

export default Bookshelf;


// function Books (props) {
//     return (
//       <ol className="books-grid">
//         {props.books.map((book) => (
//           <li key={book.id}>
//             <Book onShelfChange={props.onShelfChange} book={book}/>
//           </li>
//       ))}
//       </ol>
//     );
//   }
