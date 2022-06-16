import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export function useBookDetailData() {
  const [bookData, setBookData] = useState<any>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8119/books/${params["id"]}`
        );
        setBookData(res.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBook().then();
  }, [params["id"]]);

  return { book: bookData, error, loading };
}
