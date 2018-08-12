import React, { Component } from 'react';
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class BookList extends Component {

	render() {
		return (
			<div className="list-books">
	            <div className="list-books-title">
	              	<h1>MyReads</h1>
	            </div>
            <div className="list-books-content">
	            <div>
	                <BookShelf 
	                	shelf='Currently Reading'
	                  	books={ this.props.books.filter((book) => (book.shelf === 'currentlyReading')) } 
	                  	onShelfChange={this.props.onShelfChange}
	                />
	                <BookShelf 
	                  	shelf='Want to Read'
	                  	books={ this.props.books.filter((book) => (book.shelf === 'wantToRead')) } 
	                  	onShelfChange={this.props.onShelfChange}
	                />
	                <BookShelf 
	                  	shelf='Read'
	                  	books={ this.props.books.filter((book) => (book.shelf === 'read')) } 
	                  	onShelfChange={this.props.onShelfChange}
	                />
	            </div>
            </div>
	            <div className="open-search">
	              	<Link className="close-search" to='/search'>Add a book</Link>
	            </div>
          	</div>
		)
    }
}

export default BookList