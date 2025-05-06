import { useEffect, useState } from 'react';
import axios from 'axios';

import { BASE_URL } from '@api/apiConfig';

export const usePageLoading = <T>(pageNumber: number, url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | boolean>(false);
  const [data, setData] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setIsLoading(true);
    setError(false);

    axios({
      method: 'GET',
      url: `${BASE_URL}${url}`,
      params: { page: pageNumber },
      signal,
    })
      .then((response) => {
        setData((prev) =>
          pageNumber === 1
            ? response.data.results
            : [...prev, ...response.data.results],
        );
        setHasMore(response.data.info.pages > pageNumber);
        setIsLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(true);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [pageNumber, url]);

  return { isLoading, error, data, hasMore };
};
