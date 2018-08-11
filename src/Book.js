import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'

class Book extends Component {

	render() {

		return (
			<div className="book">
				<div className="book-top">
				<div className="book-cover" style={{ width: 128, height: 170, backgroundImage: 'url(' + this.props.bookData.imageLinks.thumbnail + ')' }}></div>
				<ShelfChanger />
				</div>
				<div className="book-title">{ this.props.bookData.title }</div>
				<div className="book-authors">
					{ this.props.bookData.authors && this.props.bookData.authors.join(', ') }
				</div>
			</div>
		)
	}
}

export default Book