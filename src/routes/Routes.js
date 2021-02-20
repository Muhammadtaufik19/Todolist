import React from "react";
import { Route } from "react-router-dom";
import Auth from "../views/Auth";
import Task from "../views/Task";
import PrivateRoute from "./PrivateRoutes";

const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Auth} />
      <PrivateRoute exact path="/task" component={Task} />
    </React.Fragment>
  );
};

export default Routes;
