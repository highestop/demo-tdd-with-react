import { useRemoteService } from "./useRemoteService";
import { BookList } from "./BookList";
import React from "react";

export function BookListContainer() {
  const { data, error, loading } = useRemoteService<any[]>(
    `http://localhost:8119/books`
  );

  return <BookList data={data} error={error} loading={loading}></BookList>;
}
