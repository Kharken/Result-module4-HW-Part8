import { useSetContext } from '@app/hooks/useSetContext';

import { ChildrenProps } from '@app-types/types';
import { AuthContext } from '@features/auth';
export const AuthProvider = ({ children }: ChildrenProps) => {
  const { value } = useSetContext();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
