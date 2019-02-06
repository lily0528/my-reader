import React, { Component } from 'react';

class BookItem extends Component{

  shelfIcon = str => {
    return str.replace(/([A-Z])/g, letter => `-${letter.toLowerCase()}`);
  };
    render(){
        const book = this.props.book;
        return(
            <li>
            <div className="book">
              <div className="book-top">
              <div className="book-cover" 
               style={{ width: 128, height: 193, 
               backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'no-Image'}")` 
               }}>
               </div>
                <div className={'book-shelf-changer' + (book.shelf ? ` ${this.shelfIcon(book.shelf)}` : '')}>
                  <select value={book.shelf} onChange={(event) => this.props.changeShelf(book, event.target.value)}>
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
        )

    }
}
export default BookItem