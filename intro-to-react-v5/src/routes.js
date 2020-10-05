import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchParams from './SearchParams';

const Details = lazy(() => import('./Details'));

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SearchParams} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  );
}

export default Routes;
