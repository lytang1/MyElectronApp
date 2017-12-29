/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import TransactionPage from './containers/TransactionPage';

export default () => (
  <App>
    <Switch>
      <Route path="/transaction" component={TransactionPage} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={HomePage} />{/*root url must be at the last line*/}
    </Switch>
  </App>
);
