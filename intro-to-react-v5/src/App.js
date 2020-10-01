import React, { useState } from 'react';

import { render } from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './routes';
import ThemeContext from './ThemeContext';

function App() {
  const themeHook = useState('darkblue');
  return (
    <ThemeContext.Provider value={themeHook}>
      <BrowserRouter>
        <div id="something-important">
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
