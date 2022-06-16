import { Typography } from "@material-ui/core";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { BookDetailContainer } from "./BookDetailContainer";
import React from "react";
import { BookListContainer } from "./BookListContainer";

export function App() {
  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route index element={<BookListContainer></BookListContainer>}></Route>
        <Route
          path="books/:id"
          element={<BookDetailContainer></BookDetailContainer>}
        ></Route>
      </Routes>
    </div>
  );
}
