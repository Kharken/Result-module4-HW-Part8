import { ErrorBoundary } from '@app/error-boundary';

import { Location } from '@location/Location';

export const LocationPage = () => {
  return (
    <ErrorBoundary>
      <Location />
    </ErrorBoundary>
  );
};
