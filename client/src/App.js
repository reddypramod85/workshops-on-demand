import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import SuccessPage from "./pages/Success";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          exact
          path="/success"
          render={props => <SuccessPage {...props} />}
        />
      </Switch>
    </Router>
  );
}
export default App;
