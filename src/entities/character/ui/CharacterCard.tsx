import { useLocation } from 'react-router-dom';

import { CardLayout, LabelValue, Section } from '@shared/ui';

export const CharacterCard = () => {
  const location = useLocation();
  const { isLoading, error, data } = location.state;
  const {
    status,
    species,
    name,
    gender,
    created,
    type,
    image,
    origin,
    location: charLocation,
    episode,
  } = data;
  const createdDate = new Date(created).toLocaleDateString();

  return (
    <CardLayout
      isLoading={isLoading}
      error={error.toString()}
      title={name}
      image={image}
    >
      <LabelValue
        label="Status"
        value={status}
      />
      <LabelValue
        label="Species"
        value={species}
      />
      <LabelValue
        label="Type"
        value={type || 'unknown'}
      />
      <LabelValue
        label="Gender"
        value={gender}
      />
      <Section
        title="Origin"
        items={[`Name: ${origin.name}`, `URL: ${origin.url}`]}
      />
      <Section
        title="Location"
        items={[`Name: ${charLocation.name}`, `URL: ${charLocation.url}`]}
      />
      <Section
        title="Episodes"
        items={episode.map((url: string) => `URL: ${url}`)}
      />
      <LabelValue
        label="Created"
        value={createdDate}
      />
    </CardLayout>
  );
};
