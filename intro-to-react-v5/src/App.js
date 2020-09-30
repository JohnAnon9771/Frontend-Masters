import React from 'react';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div id="something-important">
        <h1>Adopt Me!</h1>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
