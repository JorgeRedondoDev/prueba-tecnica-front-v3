import React from "react";
import Login from "pages/Login";
import Listado from "pages/Listado";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const isLogged: Boolean =
    localStorage?.getItem("token") === "QpwL5tke4Pnpja7X4";

  return (
    <Router>
      <Switch>
        <Route
          path="/users"
          component={
            isLogged ? () => <Listado /> : () => <Redirect to="/login" />
          }
        />
        <Route
          path="/login"
          component={
            isLogged ? () => <Redirect to="/users" /> : () => <Login />
          }
        />
        {isLogged ? <Redirect to="/users" /> : <Redirect to="/login" />}
      </Switch>
    </Router>
  );
};

export default App;
