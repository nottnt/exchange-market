import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import reducers from './reducers'
import rootSagas from './sagas'
import "regenerator-runtime/runtime";

export const history = createBrowserHistory()

const configureStore = (initialState = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const routeMiddleware = routerMiddleware(history)
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        reducers(history),
        initialState,
        composeEnhancers(
            applyMiddleware(routeMiddleware, sagaMiddleware)
        )
    )

    sagaMiddleware.run(rootSagas)
    return store
}

export default configureStore
