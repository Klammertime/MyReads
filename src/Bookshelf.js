import React from 'react';
import Book from './SingleBook';

function Bookshelf (props){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.categoryTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {props.books.filter(book => book.shelf === props.category).map((book) => (
            <li key={book.id}>
              <Book book={book} 
                    changeShelf={props.changeShelf} 
                    bookID={book.id} 
                    shelf={book.shelf}/>
            </li>
          ))}
          </ol>
        </div>
      </div>
    );
}

export default Bookshelf;