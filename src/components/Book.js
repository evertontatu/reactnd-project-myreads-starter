import React, { Component } from 'react'

class Book extends Component{

  state = {
    imageLink: '',
  }

  onHandle(book, shelf){
    this.props.onSelected(book, shelf.target.value)
  }

  render(){    
    const { book } = this.props;

    if (book.imageLinks === undefined){
      this.state.imageLink = 'images/imagem-nao-disponivel.jpg';
    } else {
      this.state.imageLink = book.imageLinks.smallThumbnail;
    }

    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.state.imageLink+')', backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.onHandle.bind(this, book)} value={book.shelf ? book.shelf : 'none'}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book;