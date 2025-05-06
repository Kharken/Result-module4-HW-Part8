import { JSX } from 'react';

import { List, Stack, Text } from '@mantine/core';

interface SectionProps {
  title: string;
  items: (string | JSX.Element)[];
}

export const Section = ({ title, items }: SectionProps) => (
  <Stack
    mt="md"
    gap={4}
  >
    <Text fw={600}>{title}</Text>
    <List withPadding>
      {items.map((item, i) => (
        <List.Item key={i}>{item}</List.Item>
      ))}
    </List>
  </Stack>
);
