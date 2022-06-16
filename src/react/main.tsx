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
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:8119");
      setBooks(res.data);
    };
    // fetchBooks();
  }, []);
  return (
    <Typography variant="h2" component="h2" data-test="heading">
      Bookish
    </Typography>
  );
}
