import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import DBJson from "../../cypress/stub-server/db.json";
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
  const [books, setBooks] = useState<typeof DBJson["books"]>([]);
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
        <Typography className="book-item">{book.name}</Typography>
      ))}
    </div>
  );
}
