import React from "react";

export function BookItem(props: { book: any }) {
  return <div className="book-item">{props.book.name}</div>;
}
