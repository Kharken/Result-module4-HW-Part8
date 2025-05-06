import { ErrorBoundary } from '@app/error-boundary';

import { Episode } from '@episode/Episode';

export const EpisodePage = () => {
  return (
    <ErrorBoundary>
      <Episode />
    </ErrorBoundary>
  );
};
