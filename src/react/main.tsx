import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import { Typography } from "@material-ui/core";
import "./main.css";

import DBJson from "../../cypress/stub-server/db.json";

type Books = typeof DBJson["books"];
type Book = Books[number];

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
  const [books, setBooks] = useState<Books>([]);
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

function BookItem(props: { book: Book }) {
  return <div className="book-item">{props.book.name}</div>;
}
