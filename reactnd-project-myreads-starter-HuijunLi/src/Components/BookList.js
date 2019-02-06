import React, { Component } from 'react';
import BookItem from './BookItem';

class BooksList extends Component {

    render () {
        const {changeShelf, results} = this.props   
         console.log(results)
        if (results === undefined){
            return results;
        }

        return (
        <ol className="books-grid">
            {results.map((item,index)=>(
                <BookItem 
                key={index}
                book = {item} 
                changeShelf = {changeShelf}
                />
            ))}
        </ol>
        )
    }
}

export default BooksList;