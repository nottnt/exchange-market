
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'

import { Provider } from "react-redux";
import configureStore, { history } from './configure-store'
import Market from './containers/market'
import Home from './containers/home'
import Currency from './containers/currency'

import './App.scss';

const store = configureStore({})
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/market" render={() => <Market />} />
            <Route path="/market/:pairId" render={() => <Currency />} />
          </Switch>
        </ConnectedRouter>
      </div>
    </Provider>
  );
}

export default App;
