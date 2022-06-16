import React from "react";
import { Link } from "react-router-dom";

export function BookItem(props: { book: any }) {
  return (
    <div className="book-item">
      <h2 className="title">{props.book.name}</h2>
      <Link to={`/books/${props.book.id}`}>View Details</Link>
    </div>
  );
}
