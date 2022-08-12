import React from "react";
import Sidebar from "../../component/common/Sidebar";
import { Route, Switch } from "react-router-dom";
import Appoinments from "../../component/common/Appoinments";
import CreateAppoinments from "../../component/common/CreateAppoinments";
import Gates from "../Dashboard/Gates";
import Dashboard from "../Dashboard/Dashboard";

function LandingPage(props) {
  return (
    <div className="landing-page">
      <Sidebar />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/appionments" component={Appoinments} />
        <Route path="/createappionments" component={CreateAppoinments} />
        <Route path="/gates" component={Gates} />
      </Switch>
    </div>
  );
}

export default LandingPage;
