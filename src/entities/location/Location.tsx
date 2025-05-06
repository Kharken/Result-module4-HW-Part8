import { API_ROUTES } from '@api/apiConfig';

import { LocationData } from '@location/model/types';
import { LocationListItem } from '@location/ui/LocationListItem';
import { Container, List } from '@mantine/core';
import { useInfinityScroll } from '@shared/hooks/useInfinityScroll';

export const Location = () => {
  const { lastNodeRef, data, error, isLoading } =
    useInfinityScroll<LocationData>(API_ROUTES.Location);

  return (
    <Container>
      <List>
        {data &&
          data.map((item, index) => {
            const isLast = data.length === index + 1;

            return (
              <div
                ref={isLast ? lastNodeRef : null}
                key={item.id}
              >
                <LocationListItem
                  data={item}
                  isLoading={isLoading}
                  error={error}
                />
              </div>
            );
          })}
      </List>
    </Container>
  );
};
