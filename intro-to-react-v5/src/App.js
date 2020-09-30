import React from 'react';

import { render } from 'react-dom';
import SearchParams from './SearchParams';

function App() {
  return (
    <div id="something-important">
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
