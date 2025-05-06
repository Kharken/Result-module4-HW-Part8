import { Link } from 'react-router-dom';

import { List, Paper, Text } from '@mantine/core';

interface CardListItemProps {
  to: string;
  id: number | string;
  title: string;
  subtitle?: string;
  state?: any;
}

export const CardListItem = ({
  to,
  id,
  title,
  subtitle,
  state,
}: CardListItemProps) => {
  return (
    <List.Item style={{ textAlign: 'center' }}>
      <Link
        to={to}
        state={state}
        style={{ textDecoration: 'none' }}
      >
        <Paper
          withBorder
          p="md"
          radius="md"
          shadow="xs"
        >
          <Text
            fw={600}
            fz="md"
          >
            #{id}
          </Text>
          <Text
            fz="lg"
            fw={500}
          >
            {title}
          </Text>
          {subtitle && (
            <Text
              fz="sm"
              c="dimmed"
            >
              {subtitle}
            </Text>
          )}
        </Paper>
      </Link>
    </List.Item>
  );
};
