import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useBootstrap } from "./hooks";

//Routes
import { Home as TeacherHome, Lecture } from "./teacher/routes";
import {
  LandingPage,
  StudentLandingPage,
  ParentLandingPage,
  TeacherLandingPage,
  Login,
  SignUp,
} from "./platform/routes";

import { Statistics } from "./teacher-dashboard/routes";

//Style
import "./style.scss";
import { Header } from "./teacher-dashboard/components";
import React from "react";

const App = () => {
  const { subdomain } = useBootstrap();
  return (
    <div className="app-container">
      <Router>
        {subdomain == "" && (
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/StudentLandingPage" component={StudentLandingPage} />
            <Route path="/ParentLandingPage" component={ParentLandingPage} />
            <Route path="/TeacherLandingPage" component={TeacherLandingPage} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        )}
        {subdomain == "admin" && (
          <Switch>
            <div>admin</div>
          </Switch>
        )}
        {subdomain == "teacher" && (
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Statistics} />
            </Switch>
          </React.Fragment>
        )}
        {subdomain != "" && subdomain != "admin" && subdomain != "teacher" && (
          <Switch>
            <Route exact path="/" component={TeacherHome} />
            <Route path="/Lecture" component={Lecture} />
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;
