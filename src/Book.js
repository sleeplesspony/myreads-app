import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'

class Book extends Component {

	render() {

		let { book } = this.props
		let bookImage = book.imageLinks ? `url(${book.imageLinks.thumbnail})` : 'none';

		return (
			<div className="book">
				<div className="book-top">
				<div className="book-cover" style={{ width: 128, height: 170, backgroundImage: bookImage }}></div>
				<ShelfChanger book={book} onShelfChange={this.props.onShelfChange}/>
				</div>
				<div className="book-title">{ book.title }</div>
				<div className="book-authors">
					{ book.authors && book.authors.join(', ') }
				</div>
			</div>
		)
	}
}

export default Book