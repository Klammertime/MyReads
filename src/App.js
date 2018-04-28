import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf';

class App extends Component {
  state = {
    books: [],
    showSearchPage: false,
    shelfs: []
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate ran');
  }

  // setting a setState callback works 
    // setState(
  //   { name: "Michael" },
  //   () => console.log(this.state)
  // );
  // => { name: "Michael" }


  // this works but select button not updating with correct selection
  setShelf = (e, bookObj) => {
    BooksAPI.update({id: bookObj}, e.target.value) 
      .then(shelfs => {
        this.setState(
          { shelfs }, 
          () => {
            BooksAPI.getAll()
            .then((books) => {
              this.setState(() => ({
                books: books
              }))
            })
          }
        );
      });
  }

  // input needs to call this:
  //search(query)

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
          <div className="search-books-bar">
            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input type="text" placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <Bookshelf books={this.state.books} changeShelf={this.setShelf} category="search" categoryTitle="Search Results"/>
          </div>
        </div>
       ) : (       
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <Bookshelf books={this.state.books} changeShelf={this.setShelf} category="read" categoryTitle="Read"/>
            <Bookshelf books={this.state.books} changeShelf={this.setShelf} category="currentlyReading" categoryTitle="Currently Reading"/>
            <Bookshelf books={this.state.books} changeShelf={this.setShelf} category="wantToRead" categoryTitle="Want To Read"/>
          </div>
          <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
       )}
      </div>
    );
  }
}

export default App;