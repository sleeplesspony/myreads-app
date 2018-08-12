import React, { Component } from 'react';

class ShelfChanger extends Component {

	// handle book shelf selection
	handleChange = (event) => {
		let shelf = event.target.value;
		this.props.onShelfChange(this.props.book, shelf);		
	}

	render() {
		let { book } = this.props
		return (
			<div className="book-shelf-changer">
				<select value={book.shelf ? book.shelf : "none"} onChange={this.handleChange}>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default ShelfChanger