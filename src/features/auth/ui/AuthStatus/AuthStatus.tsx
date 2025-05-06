import { useNavigate } from 'react-router-dom';

import { routerConfig } from '@app/router/routeConfig';

import { useAuth } from '@auth/model/hooks/useAuth';
import { Button, Flex, Group, Text } from '@mantine/core';

export const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth?.signOut(() => {
      navigate(routerConfig.index);
    });
  };

  if (auth && auth.user === null) {
    return (
      <Flex
        columnGap={30}
        align="center"
        justify="flex-start"
        style={{ marginBlock: '10px' }}
      >
        <Text size="lg">You are not logged in!</Text>
        <Button
          variant="filled"
          color="blue.1"
          onClick={() => {
            navigate(routerConfig.login);
          }}
        >
          <Text
            size="lg"
            c="grape"
          >
            Login
          </Text>
        </Button>
      </Flex>
    );
  }

  return (
    <Group
      align="center"
      justify="flex-end"
    >
      <Text>Welcome </Text>
      <Text c="grape.6">user {auth?.user?.email}</Text>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </Group>
  );
};
