import { Navigate } from 'react-router-dom';

import { routerConfig } from '@app/router/routeConfig';

import { ChildrenProps } from '@app-types/types';
import { useAuth } from '@auth/model/hooks/useAuth';

export const PrivateRoute = ({ children }: ChildrenProps) => {
  const auth = useAuth();

  if (auth && auth.user === null) {
    return <Navigate to={routerConfig.login} />;
  }

  return children;
};
