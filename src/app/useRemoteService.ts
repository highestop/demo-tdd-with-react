import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export function useRemoteService<T>(url: string, initData?: T) {
  const [data, setData] = useState<T | undefined>(initData);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBook().then();
  }, [params["id"]]);

  return { data, error, loading };
}
