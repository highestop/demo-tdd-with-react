import React from "react";
import { createRoot } from "react-dom/client";
import { Typography } from "@material-ui/core";
import "./main.css";
import { BookList } from "./BookList";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import { BookDetail } from "./BookDetail";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList></BookList>}></Route>
          <Route path="books/:id" element={<BookDetail></BookDetail>}></Route>
        </Routes>
      </BrowserRouter>
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
