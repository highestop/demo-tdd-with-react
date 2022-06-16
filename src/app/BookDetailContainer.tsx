import React from "react";
import { useRemoteService } from "./useRemoteService";
import { useParams } from "react-router";
import { BookDetail } from "./BookDetail";

export function BookDetailContainer() {
  const params = useParams();
  const { data } = useRemoteService<any>(
    `http://localhost:8119/books/${params["id"]}`
  );
  return <BookDetail name={data?.name}></BookDetail>;
}
