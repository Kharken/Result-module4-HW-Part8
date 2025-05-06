import { Link } from 'react-router-dom';

import { routerConfig } from '@app/router/routeConfig';

import { Container } from '@mantine/core';

export const NotFoundPage = () => {
  return (
    <>
      <Container>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to={routerConfig.index}>Go to Main Page</Link>
      </Container>
    </>
  );
};
