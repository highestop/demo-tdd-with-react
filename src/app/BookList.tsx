import { Typography } from "@material-ui/core";
import React from "react";
import { BookItem } from "./BookItem";
import { useBookListData } from "./useBookListData";

export function BookList() {
  const { books, error, loading } = useBookListData();

  if (error) {
    return <p>Error..</p>;
  }
  if (loading) {
    return <p>Loading..</p>;
  }
  return (
    <div data-test="book-list">
      {books.map((book) => (
        <Typography key={book.id}>
          <BookItem book={book}></BookItem>
        </Typography>
      ))}
    </div>
  );
}
