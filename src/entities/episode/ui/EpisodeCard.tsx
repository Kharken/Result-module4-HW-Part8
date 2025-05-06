import { useLocation } from 'react-router-dom';

import { CardLayout, LabelValue, Section } from '@shared/ui';

export const EpisodeCard = () => {
  const location = useLocation();
  const { isLoading, error, data } = location.state;
  const { name, air_date, episode, created, characters } = data;
  const createdDate = new Date(created).toLocaleDateString();

  return (
    <CardLayout
      isLoading={isLoading}
      error={error?.toString()}
      title={name}
    >
      <LabelValue
        label="Episode"
        value={episode}
      />
      <LabelValue
        label="Air Date"
        value={air_date}
      />
      <Section
        title="Characters"
        items={characters.map((url: string) => `URL: ${url}`)}
      />
      <LabelValue
        label="Created"
        value={createdDate}
      />
    </CardLayout>
  );
};
