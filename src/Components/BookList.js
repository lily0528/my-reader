import React, { Component } from 'react';
import BookItem from './BookItem';

class BooksList extends Component {

    render () {
        const {changeShelf, results} = this.props   
        return (        
        <ol className="books-grid">
            {results.length >0 && results.map((book,index)=>(
                <li>
                <div className="book">
                  <div className="book-top">
                  <div className="book-cover" 
                   style={{ width: 128, height: 193, 
                   backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'no-Image'}")` 
                   }}>
                   </div>
                    <div className={'book-shelf-changer' + (book.shelf ? ` ${this.shelfIcon(book.shelf)}` : '')}>
                      <select value={book.shelf} onChange={(event) => changeShelf(book, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
        </ol>
        )
    }
}

export default BooksList;