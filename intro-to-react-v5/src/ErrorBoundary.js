import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('ErrorBoundary catch an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with the listing
          <Link to="/">Click Here</Link>
          To go back to the home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
