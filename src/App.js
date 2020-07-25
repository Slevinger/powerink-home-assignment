import React from "react";
import MainRouter from "./components/MainRouter";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route exact path="/powerlink-home-assignment">
        <Redirect to="/teams" />
      </Route>
      <MainRouter />
    </Router>
  );
}

export default App;
