import { CharacterCardProps } from '@character/model/types';
import { CardListItem } from '@shared/ui';

export const CharacterListItem = (props: CharacterCardProps) => {
  const { isLoading, error, data } = props;
  if (!data) return null;

  return (
    <CardListItem
      to={`/characters/${data.id}`}
      id={data.id}
      title={data.name}
      state={{ isLoading, data, error }}
    />
  );
};
