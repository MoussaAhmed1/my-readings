/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import { Book } from "./Book";
export default function Search({ books, handleShelves }) {
  const [qurey, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([...books]);
  const [loading, setloading] = useState(false);

  const handelSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setloading(true);
    console.log(qurey);
    if (qurey?.length) {
      // call back-end
      (async () => {
        await search(qurey, 2)
          .then((book) => {
            if (book.length) {
              setSearchedBooks(book);
            }
          })
          .catch((err) => console.log(err));
      })();
    }
    setloading(false);
  }, [qurey]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            className="form-control"
            value={qurey}
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => handelSearch(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {!(qurey?.length > 0)
            ? "still no data"
            : loading
            ? "loading..."
            : searchedBooks?.map((sb) => {
                return (
                  <li key={sb.id}>
                    <Book book={sb} handleShelves={handleShelves} />
                  </li>
                );
              })}
        </ol>
      </div>
    </div>
  );
}
