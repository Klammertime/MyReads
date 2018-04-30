import React, { Component } from 'react';
import Book from './SingleBook';
import PropTypes from 'prop-types';

class Searchresults extends Component {
  render (){
    const empty = this.props.empty;
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Search Results</h2>
        <div className="bookshelf-books">
        {empty ? 'There are no results.' : ''}
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book book={book} changeShelf={this.props.changeShelf} bookID={book.id}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Searchresults.propTypes = {
  books: PropTypes.array.isRequired,
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
}

export default Searchresults;