import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
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
    selectValue: {value: 'moveTo'},
    query: ''
  }

  handleChange(e) {
    this.setState({query: e.target.value},
      () => {
        BooksAPI.search(this.state.query)
          .then((results) => {
            if(Array.isArray(results)){
              const existingBooks = this.state.books;
              const newResults = results.map(function(val){
                let res = existingBooks.find(el => (el.id === val.id));
                val.shelf = 'none';
                return res ? res : val;
              });
              this.setState(() => ({
                searchResults: newResults,
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
              this.setState(() => ({
                books: books
              }))
            })
          }
        );
      });
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</Link>
            <div className="search-books-input-wrapper">
              <input value={this.state.query} 
                    type="text" 
                    onChange={(e) => this.handleChange(e)} 
                    placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
          {this.state.searchResults && 
            <Searchresults books={this.state.searchResults} 
                            changeShelf={this.setShelf} 
                            empty={this.state.emptyResult} />
          }
          </div>
        </div>
       ) : (    
        <Route exact path='/' render={() => (
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
            <Link to="/search" onClick={() => this.setState({ showSearchPage: true, query: '', searchResults: null })}>
              Add a book</Link>
          </div>
        </div>
        )} />   
       )}
      </div>
    );
  }
}

export default App;