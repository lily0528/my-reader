import React, { Component } from 'react';
import BookItem from './BookItem';


class BooksGrid extends Component{

    render() {
        return(
        <div className="list-books">                 
          <div className="list-books-title">
          <h1>MyReads</h1>
          </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.length > 0 && this.props.books.filter((book) => (book.shelf === "currentlyReading"))
                    .map((book,index) =>(                                
                     <BookItem 
                     key={index}
                     book = {book} 
                     changeShelf = {this.props.changeShelf}
                     />
                     ))
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.length > 0 && this.props.books.filter((book) => (book.shelf === "wantToRead"))
                    .map((book,index) =>(                
                     <BookItem 
                     key={index} 
                     book = {book} 
                     changeShelf = {this.props.changeShelf}
                     />
                     ))
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.length > 0 && this.props.books.filter((book) => (book.shelf === "read")).map((book,index) =>(                
                     <BookItem key={index}
                      book = {book} 
                      changeShelf = {this.props.changeShelf}/>))
                    }
                   </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default BooksGrid