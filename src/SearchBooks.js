import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'

class SearchBooks extends Component {

	state = {
		query: '',
		resultBooks:[]
	}

	// handle search query update
	updateQuery = (query) => {		
		this.setState({query});
		query = query.trim();
		BooksAPI.search(query).then((books) => {
			console.log(books);
			if (query !== this.state.query) return;
			if (typeof books !== 'undefined' && typeof books.error === 'undefined' && books.length > 0) {
				let resultBooks = books;
				if(this.props.booksOnShelves.length) {
					let resultBooks = books.map((book) => {
						for(let i = 0; i < this.props.booksOnShelves.length; i++) {
							if (book.id === this.props.booksOnShelves[i].id) {
								book.shelf = this.props.booksOnShelves[i].shelf;
							}
						}
					});
				}
				this.setState({resultBooks: books})
			} else {
				this.setState({resultBooks:[]})
			}			
		}).catch((error) => { console.log(`Error occures ${error}`);})
	} 

	render () {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input 
							type="text" 
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<BookGrid books={this.state.resultBooks} onShelfChange={this.props.onShelfChange}/>
				</div>
			</div>
		)
	}
}

export default SearchBooks