import React, { useState, Suspense } from 'react';

// import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';
import Routes from './routes';
import ThemeContext from './ThemeContext';

export default function App() {
  const themeHook = useState('darkblue');
  return (
    <ThemeContext.Provider value={themeHook}>
      <BrowserRouter>
        <div id="something-important">
          <NavBar />
          <Suspense fallback={<h1>Loading route...</h1>}>
            <Routes />
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
