import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Parties from "./parties/pages/Parties";
import NewVideo from "./videos/pages/newVideo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Parties />
        </Route>
        <Route path="/videos/new" exact>
          <NewVideo />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
