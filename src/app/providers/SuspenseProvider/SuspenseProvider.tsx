import { FC, Suspense } from 'react';

import { SuspenseProviderProps } from '@app-types/types';

export const SuspenseProvider: FC<SuspenseProviderProps> = ({
  children,
  fallback,
}) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};
