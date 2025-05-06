import { useCallback, useRef, useState } from 'react';

import { usePageLoading } from '@shared/hooks/usePageLoading';

export const useInfinityScroll = <T>(url: string) => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data, hasMore } = usePageLoading<T>(page, url);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastNodeRef = useCallback(
    (node: Element | null) => {
      if (isLoading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore],
  );

  return { lastNodeRef, page, error, data, isLoading };
};
