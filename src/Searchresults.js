import React, { Component } from 'react';
import Book from './SingleBook';
import PropTypes from 'prop-types';

class Searchresults extends Component {

  render (){

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Search Results</h2>
        <div className="bookshelf-books">
        {this.props.empty ? `There are no results.` : ``}
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book book={book} 
                      changeShelf={this.props.changeShelf} 
                      bookID={book.id} 
                      shelf={book.shelf}/>
              </li> 
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Searchresults.propTypes = {
  books: PropTypes.array.isRequired
}

export default Searchresults;