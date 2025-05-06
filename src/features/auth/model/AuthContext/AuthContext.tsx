import { Context } from 'react';
import { createContext } from 'react';

import { Value } from '@app-types/types';

export const AuthContext: Context<Value | null> = createContext<Value | null>(
  null,
);
