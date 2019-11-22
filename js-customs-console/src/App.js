import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Home from './modules/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComponentsRouter from './modules/Components/ComponentsRouter';
import StyleguidesRouter from './modules/Styleguides/StyleguidesRouter';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './redux';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;

    * {
      box-sizing: border-box;
    }

    h1 {
      margin: 16px 0;
    }
  }
`;

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/app/components" component={ComponentsRouter} />
          <PrivateRoute path="/app/styleguides" component={StyleguidesRouter} />
          <Route component={() => <div>404</div>} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
