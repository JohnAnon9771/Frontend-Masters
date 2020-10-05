import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import express from 'express';
import fs from 'fs';

import App from '../src/App';

const PORT = process.env.PORT || 3333;

const html = fs.readFileSync('dist/index.html').toString();

const parts = html.split('not rendered');

const app = express();

app.use('/dist', express.static('dist'));
app.use((req, res) => {
  res.write(parts[0]);
  const reactMarkup = (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const stream = renderToNodeStream(reactMarkup);
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.write(parts[1]);
    res.end();
  });
});

console.log(`listening on: ${PORT}`);
app.listen(PORT);
