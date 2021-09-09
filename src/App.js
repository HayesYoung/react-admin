import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import routes from './routes/index';

import Login from './views/login/index'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
