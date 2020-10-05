import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';
import Routes from './routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div id="something-important">
          <NavBar />
          <Suspense fallback={<h1>Loading route...</h1>}>
            <Routes />
          </Suspense>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
