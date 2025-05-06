import { lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainPage } from '@pages/main';

import { SuspenseProvider } from '@app/providers';
import { PrivateRoute } from '@app/router/components/PrivateRoute';
import { routerConfig } from '@app/router/routeConfig';

import { CharacterCard } from '@entities/character';
import { EpisodeCard } from '@entities/episode';
import { LocationCard } from '@entities/location';
import { AppLayout } from '@widgets/layout';

const Character = lazy(() =>
  import('@character-page/CharacterPage').then((module) => ({
    default: module.CharacterPage,
  })),
);
const Episode = lazy(() =>
  import('@episode-page/EpisodePage').then((module) => ({
    default: module.EpisodePage,
  })),
);

const Location = lazy(() =>
  import('@location-page/LocationPage').then((module) => ({
    default: module.LocationPage,
  })),
);

const Login = lazy(() =>
  import('@login-page/LoginPage').then((module) => ({
    default: module.LoginPage,
  })),
);

const NotFound = lazy(() =>
  import('@not-found-page/NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  })),
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <SuspenseProvider fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route
            path={routerConfig.index}
            element={<AppLayout />}
          >
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path={routerConfig.characters}
              element={
                <PrivateRoute>
                  <Character />
                </PrivateRoute>
              }
            />
            <Route
              path={routerConfig.character}
              element={
                <PrivateRoute>
                  <CharacterCard />
                </PrivateRoute>
              }
            />
            <Route
              path={routerConfig.episodes}
              element={
                <PrivateRoute>
                  <Episode />
                </PrivateRoute>
              }
            />
            <Route
              path={routerConfig.episode}
              element={
                <PrivateRoute>
                  <EpisodeCard />
                </PrivateRoute>
              }
            />
            <Route
              path={routerConfig.locations}
              element={
                <PrivateRoute>
                  <Location />
                </PrivateRoute>
              }
            />
            <Route
              path={routerConfig.location}
              element={
                <PrivateRoute>
                  <LocationCard />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path={routerConfig.notFound}
            element={<NotFound />}
          />
          <Route
            path={routerConfig.login}
            element={<Login />}
          />
        </Routes>
      </SuspenseProvider>
    </BrowserRouter>
  );
};
