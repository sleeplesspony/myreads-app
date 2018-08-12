import React, { Component } from 'react';
import Book from './Book'

class BookGrid extends Component {

	render() {
		return (
			<ol className="books-grid">
				{ this.props.books.map((book) => (
					<li key={book.id}>
						<Book book={book} onShelfChange={this.props.onShelfChange}/>
					</li>
				)) }
			</ol>
		)
    }
}

export default BookGrid