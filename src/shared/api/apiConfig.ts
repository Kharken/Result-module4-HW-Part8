import { ApiRoutes } from '@app-types/types';

const BASE_URL = 'https://rickandmortyapi.com/api';

const API_ROUTES: ApiRoutes = {
  Character: '/character',
  Episode: '/episode',
  Location: '/location',
} as const;

export { API_ROUTES, BASE_URL };
