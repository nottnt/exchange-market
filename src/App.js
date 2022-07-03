import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Market from './containers/Market'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="market/:pairId">
          <Market />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
