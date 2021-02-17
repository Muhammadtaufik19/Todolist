import React from "react";
import { Route } from "react-router-dom";
import Auth from "../views/Auth";
import Task from "../views/Task";

const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Auth} />
      <Route exact path="/task" component={Task} />
    </React.Fragment>
  );
};

export default Routes;
