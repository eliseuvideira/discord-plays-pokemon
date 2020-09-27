import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Index from "./pages";
import Config from "./pages/config";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/config" component={Config} />
      <Route path="/" component={Index} />
    </Switch>
  </HashRouter>
);

export default Router;
