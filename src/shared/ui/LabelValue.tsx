import { Text } from '@mantine/core';

interface LabelValueProps {
  label: string;
  value?: string;
}

export const LabelValue = ({ label, value }: LabelValueProps) => (
  <Text>
    <Text
      span
      fw={500}
    >
      {label}:{' '}
    </Text>
    {value || 'unknown'}
  </Text>
);
