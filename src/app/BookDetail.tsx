import React from "react";

export function BookDetail({ name }: { name?: string }) {
  return <p data-test="book-detail-name">{name ?? "-"}</p>;
}
