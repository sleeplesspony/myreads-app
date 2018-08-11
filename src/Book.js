import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'

class Book extends Component {

	render() {

		const { bookData } = this.props
		let bookImage = bookData.imageLinks ? `url(${bookData.imageLinks.thumbnail})` : 'none';

		return (
			<div className="book">
				<div className="book-top">
				<div className="book-cover" style={{ width: 128, height: 170, backgroundImage: bookImage }}></div>
				<ShelfChanger />
				</div>
				<div className="book-title">{ bookData.title }</div>
				<div className="book-authors">
					{ bookData.authors && bookData.authors.join(', ') }
				</div>
			</div>
		)
	}
}

export default Book