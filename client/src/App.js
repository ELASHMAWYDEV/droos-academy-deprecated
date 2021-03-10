import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useBootstrap } from "./hooks";

//Routes
import { Home as TeacherHome } from "./teacher/routes";

//Style
import "./style.scss";

const App = () => {
  const { subdomain } = useBootstrap();
  return (
    <div className="app-container">
      <Router>
        {subdomain == "" && (
          <Switch>
            <div
              style={{
                backgroundColor: "#ec8689",
                minHeight: "100vh",
                minWidth: "100%",
                color: "white",
                fontSize: 26,
                fontWeight: 600,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              منصة دروس أكاديمي | قريبا...
            </div>
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
