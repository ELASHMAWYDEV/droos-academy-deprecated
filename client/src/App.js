import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useBootstrap } from "./hooks";

const App = () => {
  console.log(process.env);
  const { subdomain } = useBootstrap();
  return (
    <div className="App">
      <Router>
        {subdomain == "" && (
          <Switch>
            <div>platform</div>
          </Switch>
        )}
        {subdomain == "admin" && (
          <Switch>
            <div>admin</div>
          </Switch>
        )}
        {subdomain != "" && subdomain != "admin" && (
          <Switch>
            <div>{subdomain}</div>
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;
