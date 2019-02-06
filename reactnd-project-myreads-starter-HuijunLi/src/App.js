import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route, Link } from "react-router-dom";
import './App.css';
import BooksGrid from './Components/BooksGrid';
import SearchBooks from './Components/SearchBooks';


class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books:[]
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then(books => this.setState({books}
    )); 
  }

  changeShelf = (book, newShelf) => {
  if (newShelf !== book.shelf) {
      BooksAPI.update(book, newShelf)
      .then(books => this.setState({books}))
      .then(() => {this.componentDidMount()})
      }
  }

  render() {
    return (
   <div className="app">
        <Route exact path='/' render={()=>(
        <div>
        <BooksGrid 
        books={this.state.books}
        changeShelf = {this.changeShelf}  
        />
        <div className="open-search">
        <Link to='/search'>
        <button onClick={this.componentDidMount()}>Add a book</button>
        </Link>
        </div>
        </div>
      )}/>
        <Route path='/search' render={()=>(
        <div>
            <SearchBooks
            books={this.state.books}
            />
        </div>
      )}/>
  </div>
    )
  }
}


export default BooksApp
