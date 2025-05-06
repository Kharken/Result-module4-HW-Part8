import { API_ROUTES } from '@api/apiConfig';

import { CharacterData } from '@character/model/types';
import { CharacterListItem } from '@character/ui/CharacterListItem';
import { Container, List } from '@mantine/core';
import { useInfinityScroll } from '@shared/hooks/useInfinityScroll';

export const Character = () => {
  const { lastNodeRef, data, error, isLoading } =
    useInfinityScroll<CharacterData>(API_ROUTES.Character);

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
                <CharacterListItem
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
