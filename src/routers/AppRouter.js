import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

let container = {
  maxWidth: '1200px',
  minWidth: '370px',
  margin: '0 auto'
}

let content = {
  width: '70%',
  margin: '0 auto'
}

const AppRouter = () => (
  <BrowserRouter>
    <div style={container}>
      <Header />
      <div style={content}>
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
    </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
