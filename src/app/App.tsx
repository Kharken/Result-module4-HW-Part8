import { AuthProvider } from '@app/providers';
import { AppRouter } from '@app/router';
import { globalStyles } from '@app/styles/globalStyles';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Global } from '@mantine/styles';

export const App = () => {
  return (
    <MantineProvider>
      <Global styles={globalStyles} />
      <Notifications position="top-right" />
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </MantineProvider>
  );
};
