import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'


class BookSearch extends Component{

  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  searchHandler = e => {
    if (e.target.value === ''){
      this.props.onResetSearch()
    } else {
      this.setState({searchTerm: e.target.value }, () =>{
        this.props.onSearch(this.state.searchTerm)
      })
    }
  }

  onChangeShelf = (book, shelf) => {
    this.props.changeShelf(book, shelf)
  }

  render(){
    const { bookssearch } = this.props
    const { books } = this.props

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            
            <input type="text" placeholder="Search by title or author" onChange={this.searchHandler}/>
            
          </div>
          
        </div>
        
        <div className="search-books-results">
          <ol className="books-grid">
            <div className="bookshelf-books">
              <ol className="books-grid">

                {bookssearch.map(bookss => {
                  if (books.find(book => book.id === bookss.id)){
                    let bookfind = books.find(book => book.id === bookss.id)
                    return (
                      <Book
                        book={bookfind}
                        key={bookfind.id}
                        onSelected={this.onChangeShelf}
                      />
                    )
                  } else {
                    return (
                      <Book
                        book={bookss}
                        key={bookss.id}
                        onSelected={this.onChangeShelf}
                      />
                    )
                  }
                })}
              </ol>
            </div>
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch;