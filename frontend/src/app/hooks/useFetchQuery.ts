import { useState, useEffect } from "react";
import apiClient from "@/api/apiClient";

// TODO add retry functionality

export const useFetchQuery = <T>(query: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Any is used for generic return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get(query);
        setData(response.data as T);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);

  const isError = error !== null;

  return { data, error, isLoading, isError };
};
