import { useEffect, useState } from "react";
import axios from "axios";

export function useBookListData() {
  const [books, setBooks] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:8119/books");
      try {
        setBooks(res.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks().then();
  }, []);
  return { books, error, loading };
}
