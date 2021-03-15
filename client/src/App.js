import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useBootstrap } from "./hooks";

//Routes
import { Home as TeacherHome } from "./teacher/routes";
import { LandingPage, StudentLandingPage } from "./platform/routes";

//Style
import "./style.scss";

const App = () => {
  const { subdomain } = useBootstrap();
  return (
    <div className="app-container">
      <Router>
        {subdomain == "" && (
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/StudentLandingPage" component={StudentLandingPage} />
          </Switch>
        )}
        {subdomain == "admin" && (
          <Switch>
            <div>admin</div>
          </Switch>
        )}
        {subdomain != "" && subdomain != "admin" && (
          <Switch>
            <Route path="/" component={TeacherHome} />
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;
