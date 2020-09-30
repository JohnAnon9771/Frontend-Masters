import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Details from './Details';
import SearchParams from './SearchParams';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SearchParams} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  );
}

export default Routes;
