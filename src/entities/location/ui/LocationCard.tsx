import { useLocation } from 'react-router-dom';

import { CardLayout, LabelValue, Section } from '@shared/ui';

export const LocationCard = () => {
  const location = useLocation();
  const { isLoading, error, data } = location.state;
  const { name, dimension, type, created, residents } = data;
  const createdDate = new Date(created).toLocaleDateString();

  return (
    <CardLayout
      isLoading={isLoading}
      error={error?.toString()}
      title={name}
    >
      <LabelValue
        label="Type"
        value={type}
      />
      <LabelValue
        label="Dimension"
        value={dimension}
      />
      <Section
        title="Residents"
        items={residents.map((url: string) => `URL: ${url}`)}
      />
      <LabelValue
        label="Created"
        value={createdDate}
      />
    </CardLayout>
  );
};
