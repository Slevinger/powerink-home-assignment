import React from "react";
import MainRouter from "./components/MainRouter";
import { createBrowserHistory } from "history";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <MainRouter />
    </Router>
  );
}

export default App;
