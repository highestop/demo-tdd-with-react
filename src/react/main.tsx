import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import DBJson from "../../cypress/stub-server/db.json";

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
    <div>
      <h1 data-test="heading">Hello World</h1>
    </div>
  );
}
