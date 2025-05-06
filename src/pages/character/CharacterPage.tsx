import { ErrorBoundary } from '@app/error-boundary';

import { Character } from '@entities/character';

export const CharacterPage = () => {
  return (
    <ErrorBoundary>
      <Character />
    </ErrorBoundary>
  );
};
