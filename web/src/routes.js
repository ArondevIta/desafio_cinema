import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
