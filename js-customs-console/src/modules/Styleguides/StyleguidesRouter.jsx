import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StyleguidesCreate from './StyleguidesCreate';


const StyleguideRouter = () => {
  return (
    <Switch>
      <Route exact path="/app/styleguides/create" component={StyleguidesCreate} />
    </Switch>
  );
}

export default StyleguideRouter;