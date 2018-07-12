import React from 'react'
import { Route } from 'react-router-dom'
import BookList from './components/BookList'
import BookSearch from './components/BookSearch'
import * as BooksAPI from './BooksAPI'

import './App.css'

class BooksApp extends React.Component {

  constructor(props){
    super(props);
    this.state = {books:[]};
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) =>{
      this.setState({books})
    })
  }

  componentWillUpdate(){
    BooksAPI.getAll().then((books) =>{
      this.setState({books})
    })
  }

  changeShelfSelected(book, shelf){
    BooksAPI.update(book, shelf)
  }
  

  render() {
    return (
      <div className="app">
          <Route exact path="/search" render={({ history }) => (
            <BookSearch />
          )}/>
           
          <Route exact path="/" render={() => (
            <BookList 
              books={this.state.books}
              changeShelf={this.changeShelfSelected}
            />
          )}/>
          
      </div>
    )
  }
}

export default BooksApp
