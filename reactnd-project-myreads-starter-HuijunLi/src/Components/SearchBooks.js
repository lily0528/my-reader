import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import BookList from './BookList';

class SearchBooks extends Component{
    state = {
        query: '',
        results: [],
        nofound: null
    }
 
    changeShelf = (book, newShelf) => {
      if (newShelf !== book.shelf) {
          BooksAPI.update(book, newShelf)
          .then(() => BooksAPI.search(this.state.query))
          .then(results => this.setState({results:results}))
      }          
    }

    updateQuery = (e) => {
      this.setState({ query: e.target.value })
      if (this.state.query!==""){
      BooksAPI.search(this.state.query)
      .then(books =>
        this.setState({
          results: books.error ? [] : books,
          nofound: books.error || null
        })
      )}
      else{
        this.setState({ results: [] })
      };
    }

    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">            
                <input type="text" placeholder="Search by title or author" onChange={this.updateQuery} value={this.state.query} />               
              </div>
            </div>
            <div className="search-books-results">
            {this.state.nofound ? (
            <p className="search-error-message">
              No maches, Please try some different terms.
            </p>
             ) : (
            <BookList results={this.state.results}
            changeShelf = {this.changeShelf}
            />)}
            </div>
          </div>
        );      
    }
}

  
export default SearchBooks