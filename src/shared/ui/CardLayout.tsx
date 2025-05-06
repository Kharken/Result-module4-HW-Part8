import { ReactNode } from 'react';

import { Container, Loader, Stack, Text } from '@mantine/core';

interface CardLayoutProps {
  isLoading: boolean;
  error: boolean;
  title: string;
  image?: string;
  children: ReactNode;
}

export const CardLayout = ({
  isLoading,
  error,
  title,
  image,
  children,
}: CardLayoutProps) => {
  if (isLoading)
    return (
      <Loader
        size="xl"
        color="grape.6"
      />
    );
  if (!error) return <Text c="red">{error}</Text>;

  return (
    <Container>
      <Stack>
        {image && (
          <img
            src={image}
            alt={title}
            style={{ borderRadius: 8, maxWidth: 300 }}
          />
        )}
        {title && (
          <Text
            fw={700}
            fz="xl"
          >
            {title}
          </Text>
        )}
        {children}
      </Stack>
    </Container>
  );
};
