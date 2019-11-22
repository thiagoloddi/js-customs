import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ComponentsIndex from './ComponentsIndex';
import ComponentsCreate from './ComponentsCreate';


const ComponentsRouter = () => {
  return (
    <Switch>
      <Route exact path="/app/components" component={ComponentsIndex} />
      <Route exact path="/app/components/create" component={ComponentsCreate} />
    </Switch>
  );
}

export default ComponentsRouter;