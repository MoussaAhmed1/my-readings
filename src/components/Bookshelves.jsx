/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Book } from './Book';

export const Bookshelves = ({books,handleShelves}) => {
   
  
  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
       </div>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
             {
             
              books.filter(book=>book.shelf=="currentlyReading").map(book=>{
               return(  <li key={book.id}><Book  book={book} handleShelves={handleShelves} /></li>)
              })

             }      
            </ol>
          </div>
        </div>
        <div className="bookshelf">

          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {
              books.filter(book=>book.shelf=="wantToRead").map(book=>{
                return(  <li key={book.id}><Book  book={book} handleShelves={handleShelves} /></li>)
              })

             }     
            </ol>
          </div>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {
              books.filter(book=>book.shelf=="read").map(book=>{
                return( <li key={book.id}><Book  book={book} handleShelves={handleShelves} /></li>)
              })

             }    
            </ol>
          </div>
        </div>
      </div>
    </div>

    {/* //search */}
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
  )
}
