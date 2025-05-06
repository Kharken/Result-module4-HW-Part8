import { Link } from 'react-router-dom';

import { API_ROUTES } from '@api/apiConfig';

import { routerConfig } from '@app/router/routeConfig';

import { Container, Flex, List, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <Flex
      component="footer"
      direction="column"
      bg="pink.1"
    >
      <nav>
        <Flex
          justify="space-between"
          align="center"
          style={{
            marginInline: '2rem',
            paddingBlock: '20px',
          }}
        >
          <Link to={routerConfig.index}>
            <Text
              size="lg"
              c="grape"
            >
              Home
            </Text>
          </Link>
          <Text
            size="lg"
            c="green.8"
          >
            Welcome to Rick & Morty Universe!
          </Text>
          <List
            listStyleType="none"
            style={{ display: 'flex', columnGap: '2rem' }}
          >
            {Object.entries(API_ROUTES).map((item) => (
              <List.Item key={item[0]}>
                <Link to={item[1]}>
                  <Text
                    size="lg"
                    c="grape"
                  >
                    {item[0]}
                  </Text>
                </Link>
              </List.Item>
            ))}
          </List>
        </Flex>
      </nav>
    </Flex>
  );
};
