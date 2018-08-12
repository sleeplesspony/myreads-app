import React, {Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            console.log(books);
            this.setState({ books })
        })
    }

    moveBook = (book, shelf) => {
        const availShelves = ['wantToRead', 'currentlyReading', 'read', 'none'];
        if (availShelves.includes(shelf)) {
            BooksAPI.update(book, shelf).then(() => {
                book.shelf = shelf;
                this.setState(state => ({ books: state.books.filter(item => book.id !== item.id).concat(book) }));
            })
        }
    }

    render() {
        return (
            <div className="app">
            <Route exact path='/' render={() => (
                <BookList books={this.state.books} onShelfChange={this.moveBook}/>
            )}/>  

            <Route path='/search' render={({ history }) => (
                <SearchBooks onShelfChange={this.moveBook} booksOnShelves={this.state.books}/>
            )}/>
            </div>
        )    
    }
}

export default BooksApp
