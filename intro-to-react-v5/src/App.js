import React, { useState } from 'react';

import { render } from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './routes';
import ThemeContext from './ThemeContext';

function App() {
  const themeHook = useState('darkblue');
  return (
    <ThemeContext.Provider value={themeHook}>
      <BrowserRouter>
        <div id="something-important">
          <NavBar />
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
