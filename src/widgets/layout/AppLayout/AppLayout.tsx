import { Outlet } from 'react-router-dom';

import { Footer } from '@layout/Footer/Footer';
import { Header } from '@layout/Header/Header';

import { AuthStatus } from '@features/auth';
import { Flex } from '@mantine/core';

export const AppLayout = () => {
  return (
    <>
      <Flex
        direction="column"
        style={{
          minHeight: '100vh',
          overflowY: 'hidden',
          maxWidth: '1280px',
          marginInline: 'auto',
        }}
      >
        <AuthStatus />
        <Header />
        <main style={{ flexGrow: 1 }}>
          <Outlet />
        </main>
        <Footer />
      </Flex>
    </>
  );
};
