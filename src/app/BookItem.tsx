import React from "react";
import { Link } from "react-router-dom";

export function BookItem({
  name,
  desc,
  id,
}: {
  name: string;
  desc: string;
  id: number;
}) {
  return (
    <div className="book-item">
      <h2 className="title" data-test="book-item-name">
        {name}
      </h2>
      <Link to={`/books/${id}`} data-test="book-item-link">
        View Details
      </Link>
      <p data-test="book-item-desc">{desc}</p>
    </div>
  );
}
