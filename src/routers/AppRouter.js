import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import ExpenseDashBoard from "../components/ExpenseDashBoard";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import Help from "../components/Help";
import NotFound from "../components/NotFound";
import Header from "../components/Header";
import Login from "../components/Login";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/dashboard" component={ExpenseDashBoard} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
