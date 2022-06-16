import React from "react";
import { useBookDetailData } from "./useBookDetailData";

export function BookDetail() {
  const { book } = useBookDetailData();
  return book?.name ?? "-";
}
