import { LocationCardProps } from '@location/model/types';
import { CardListItem } from '@shared/ui';

export const LocationListItem = (props: LocationCardProps) => {
  const { isLoading, error, data } = props;

  return (
    <CardListItem
      to={`/location/${data.id}`}
      id={data.id}
      title={data.name}
      subtitle={data.type}
      state={{ isLoading, data, error }}
    />
  );
};
