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
      <BookList></BookList>
    </React.StrictMode>
  );
}

function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:8119/books");
      setBooks(res.data);
    };
    fetchBooks().then(() => {});
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
