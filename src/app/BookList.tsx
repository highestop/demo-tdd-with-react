import React from "react";
import { BookItem } from "./BookItem";

export function BookList({
  data,
  error,
  loading,
}: {
  data?: any[];
  error?: boolean;
  loading?: boolean;
}) {
  if (error) {
    return <p data-test="book-list-error">Error..</p>;
  }
  if (loading) {
    return <p data-test="book-list-loading">Loading..</p>;
  }
  return (
    <div data-test="book-list">
      {data
        ? data.map((book) => (
            <BookItem
              key={book.id}
              name={book.name}
              id={book.id}
              desc={book.desc}
            ></BookItem>
          ))
        : null}
    </div>
  );
}
