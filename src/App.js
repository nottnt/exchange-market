import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configure-store'
import Market from './containers/Market'
import Home from './containers/Home'

import './App.scss';
const store = configureStore({})
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ConnectedRouter history={history}> */}
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="market/:pairId" element={<Market />} />
            </Routes>
          </Router>
        {/* </ConnectedRouter> */}
      </div>
    </Provider>
  );
}

export default App;
