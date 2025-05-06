import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}

export interface UserState {
  email: string;
  password: string;
}

export type SignIn = (newUser: UserState, callback: () => void) => void;

export type SignOut = (callback: () => void) => void;

export interface Value {
  user: UserState | null;
  signIn: SignIn;
  signOut: SignOut;
}

export interface SuspenseProviderProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export interface ApiRoutes {
  [key: string]: string;
}

export interface CommonProps {
  isLoading: boolean;
  error: unknown;
}

export interface CommonData {
  id: number;
  name: string;
}

export interface CommonSubData extends Pick<CommonData, 'name'> {
  url: string;
}
