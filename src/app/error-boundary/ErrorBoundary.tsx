import React, { Component, ErrorInfo } from 'react';

import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '@error-boundary/types/types';

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    return { error, errorInfo };
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong...</h3>;
    }

    return this.props.children;
  }
}
