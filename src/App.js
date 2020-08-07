import React, { Fragment } from "react";
// import "./App.css";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import NotFound from "./components/404";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={Join} />
          <Route path="/chat" exact component={Chat} />
          <Route component={NotFound} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
