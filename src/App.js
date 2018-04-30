import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Bookshelf from './Bookshelf';
import Searchresults from './Searchresults';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    books: [],
    showSearchPage: false,
    shelfs: [],
    searchResults: null,
    emptyResult: true,
    selectValue: {value: 'moveTo'}
  }

  handleChange(e) {
    this.setState({value: e.target.value},
      () => {
        BooksAPI.search(this.state.value)
          .then((results) => {
            console.log('search results', results);
            if(Array.isArray(results)){
              this.setState(() => ({
                searchResults: results,
                emptyResult: false
              }))
            } else {
              this.setState(() => ({
                searchResults: [],
                emptyResult: true
              }))
            }
          })
      }
    );
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  setShelf = (e, bookObj) => {
    this.setState({selectValue: e.target.value});

    BooksAPI.update({id: bookObj}, e.target.value) 
      .then(shelfs => {
        this.setState(
          { shelfs }, 
          () => {
            BooksAPI.getAll()
            .then((books) => {
              console.log('books', books);
              this.setState(() => ({
                books: books
              }))
            })
          }
        );
      });
  }

  render() {
    console.log("this.state.books", this.state.books);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
          <div className="search-books-bar">
            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
            <div className="search-books-input-wrapper">
              <input value={this.state.value} type="text" onChange={(e) => this.handleChange(e)} placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
          {this.state.searchResults && 
            <Searchresults books={this.state.searchResults} changeShelf={this.setShelf} empty={this.state.emptyResult} />
          }
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