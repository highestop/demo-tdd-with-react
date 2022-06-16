import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import { Typography } from "@material-ui/core";
import "./main.css";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
  );
}

function App() {
  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList></BookList>
    </div>
  );
}

function BookList() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8119/books");
      try {
        setBooks(res.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div data-test="book-list">
      {books.map((book) => (
        <Typography>
          <BookItem book={book}></BookItem>
        </Typography>
      ))}
    </div>
  );
}

function BookItem(props: { book: any }) {
  return <div className="book-item">{props.book.name}</div>;
}
