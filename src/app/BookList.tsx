import { Typography } from "@material-ui/core";
import React from "react";
import { BookItem } from "./BookItem";

export function BookList({
  data,
  error,
  loading,
}: {
  data?: any[];
  error: boolean;
  loading: boolean;
}) {
  if (error) {
    return <p>Error..</p>;
  }
  if (loading) {
    return <p>Loading..</p>;
  }
  return (
    <div data-test="book-list">
      {data
        ? data.map((book) => (
            <Typography key={book.id}>
              <BookItem
                name={book.name}
                id={book.id}
                desc={book.desc}
              ></BookItem>
            </Typography>
          ))
        : null}
    </div>
  );
}
