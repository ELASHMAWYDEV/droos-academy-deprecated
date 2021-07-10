import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useBootstrap } from "./hooks";

//Routes

//teacher-routes
import { Home as TeacherHome, Lecture } from "./teacher/routes";
import { Footer } from "./teacher/components";

//platform-routes
import {
  LandingPage,
  StudentLandingPage,
  ParentLandingPage,
  TeacherLandingPage,
  Login,
  SignUp,
} from "./platform/routes";

//teacher-dashboard-routes
import {
  AddLecture,
  Codes,
  Lectures,
  NewExam,
  Payments,
  Settings,
  Statistics,
} from "./teacher-dashboard/routes";
import { Header } from "./teacher-dashboard/components";

//student-dashboard-routes
import { Header as StudentHeader } from "./student-dashboard/components";
import {
  MyAccount,
  MyLectures,
  Payment,
  Teachers,
} from "./student-dashboard/routes";

//Style
import "./style.scss";
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
        {subdomain == "student" && (
          <React.Fragment>
            <StudentHeader />
            <Switch>
              <Route exact path="/" component={MyLectures} />
              <Route exact path="/teachers" component={Teachers} />
              <Route exact path="/my-account" component={MyAccount} />
              <Route exact path="/payment" component={Payment} />
            </Switch>
            <Footer />
          </React.Fragment>
        )}
        {subdomain == "teacher" && (
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Statistics} />
              <Route exact path="/lectures" component={Lectures} />
              <Route exact path="/codes" component={Codes} />
              <Route exact path="/add-lecture" component={AddLecture} />
              <Route exact path="/payments" component={Payments} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/new-exam" component={NewExam} />
            </Switch>
          </React.Fragment>
        )}
        {subdomain != "" &&
          subdomain != "admin" &&
          subdomain != "teacher" &&
          subdomain != "student" && (
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
