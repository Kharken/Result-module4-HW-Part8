import { API_ROUTES } from '@api/apiConfig';

import { EpisodeData } from '@episode/model/types';
import { EpisodeListItem } from '@episode/ui/EpisodeListItem';
import { List } from '@mantine/core';
import { useInfinityScroll } from '@shared/hooks/useInfinityScroll';

export const Episode = () => {
  const { lastNodeRef, data, error, isLoading } =
    useInfinityScroll<EpisodeData>(API_ROUTES.Episode);
  return (
    <div>
      <List>
        {data &&
          data.map((item, index) => {
            const isLast = data.length === index + 1;
            return (
              <div
                ref={isLast ? lastNodeRef : null}
                key={item.id}
              >
                <EpisodeListItem
                  data={item}
                  key={item.id}
                  isLoading={isLoading}
                  error={error}
                />
              </div>
            );
          })}
      </List>
    </div>
  );
};
