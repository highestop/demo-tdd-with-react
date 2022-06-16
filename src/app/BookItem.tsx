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
      <h2 className="title">{name}</h2>
      <Link to={`/books/${id}`}>View Details</Link>
      <p>{desc}</p>
    </div>
  );
}
