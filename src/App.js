import { hashHistory, Switch, Route, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes/index";

import Login from "./views/login/index";

function App() {
  return (
    <hashHistory>
      <Switch>{renderRoutes(routes)}</Switch>
    </hashHistory>
  );
}

export default App;
