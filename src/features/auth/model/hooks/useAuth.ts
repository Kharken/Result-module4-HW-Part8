import { useContext } from 'react';

import { AuthContext } from '@auth/model/AuthContext';

export const useAuth = () => {
  return useContext(AuthContext);
};
