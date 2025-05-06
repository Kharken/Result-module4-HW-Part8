import { EpisodeCardProps } from '@episode/model/types';
import { CardListItem } from '@shared/ui';

export const EpisodeListItem = (props: EpisodeCardProps) => {
  const { isLoading, error, data } = props;

  return (
    <CardListItem
      to={`/episode/${data.id}`}
      id={data.id}
      title={data.name}
      subtitle={data.episode}
      state={{ isLoading, data, error }}
    />
  );
};
