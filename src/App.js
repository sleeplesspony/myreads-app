import React, {Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <BookList books={this.state.books}/>
        )}/>  

        <Route path='/search' render={({ history }) => (
          <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
