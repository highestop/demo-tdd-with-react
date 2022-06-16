import { useRemoteService } from "./useRemoteService";
import { BookList } from "./BookList";
import React, { useEffect, useState } from "react";
import { SearchBox } from "./SearchBox";

export function BookListContainer() {
  const { data, error, loading } = useRemoteService<any[]>(
    `http://localhost:8119/books`
  );
  const [keyword, setKeyword] = useState<string>();
  const [finalData, setFinalData] = useState<any[]>([]);

  useEffect(() => {
    if (!data) {
      setFinalData([]);
      return;
    }
    if (!keyword) {
      setFinalData(data);
      return;
    }
    setFinalData(data.filter((book) => book.name.includes(keyword)));
  }, [data, keyword]);

  return (
    <>
      <SearchBox onChange={(input) => setKeyword(input)}></SearchBox>
      <BookList data={finalData} error={error} loading={loading}></BookList>
    </>
  );
}
