import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'

class SearchBooks extends Component {

	state = {
		query: '',
		resultBooks:[]
	}

	updateQuery = (query) => {
		query = query.trim();
		this.setState({query});
		BooksAPI.search(query).then((books) => {
			console.log(books);
			if (typeof books !== 'undefined' && typeof books.error === 'undefined' && books.length > 0) {
				console.log(typeof books);
				this.setState({resultBooks: books})
			} else {
				this.setState({resultBooks:[]})
			}			
		}).catch((error) => { console.log(`Error occures ${error}`)})
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
					<BookGrid books={this.state.resultBooks} />
				</div>
			</div>
		)
	}
}

export default SearchBooks