import { Link } from 'react-router-dom';

import { routerConfig } from '@app/router/routeConfig';

import { LoginForm } from '@features/auth';
import { Container, Flex, Input, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

export const LoginPage = () => {
  return (
    <Container style={{ marginTop: '1rem' }}>
      <Flex
        direction="column"
        justify="center"
        align="center"
      >
        <Link to={routerConfig.index}>
          <Text
            size="2rem"
            fw={700}
            c="grape.5"
          >
            Home
          </Text>
        </Link>
        <LoginForm />
      </Flex>
    </Container>
  );
};
